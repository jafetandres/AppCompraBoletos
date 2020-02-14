import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-nuevo-boleto',
  templateUrl: './nuevo-boleto.page.html',
  styleUrls: ['./nuevo-boleto.page.scss'],
})
export class NuevoBoletoPage implements OnInit {
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
      fecha: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      valor: new FormControl('',Validators.required),
      vehiculo: new FormControl('',Validators.required)
    });
  }


  onSubmit(value){
    let data = {
      fecha: value.fecha,
      estado: value.estado,
      valor: value.valor,
      vehiculo: value.vehiculo
     
    }
    this.firebaseService.crearBoleto(data)
    .then(
      res => {
        this.router.navigate(["/boleto"]);
      }
    )
  }

}

