import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/services/firebase.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-nueva-ruta',
  templateUrl: './nueva-ruta.page.html',
  styleUrls: ['./nueva-ruta.page.scss'],
})
export class NuevaRutaPage implements OnInit {
  items: Array<any>;

  validations_form: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView
    ) { }

  ngOnInit() {
    this.resetFields();
    if (this.route && this.route.data) {
      this.getData();
    }
  }




  async getData() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando'
    });
    this.presentLoading(loading);
    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
        console.log(this.items.length);
      });
    });
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  logout() {
    this.authService.doLogout()
    .then(res => {
      this.router.navigate([""]);
    }, err => {
      console.log(err);
    })
  }

  resetFields(){

    this.validations_form = this.formBuilder.group({
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      origen: new FormControl('',Validators.required),
      destino: new FormControl('',Validators.required)
    });
  }


  onSubmit(value){
    let data = {
      descripcion: value.descripcion,
      precio: value.precio,
      origen: value.origen,
      destino: value.destino
     
    }
    this.firebaseService.crearRuta(data)
    .then(
      res => {
        this.router.navigate(["/ruta"]);
      }
    )
  }

}
