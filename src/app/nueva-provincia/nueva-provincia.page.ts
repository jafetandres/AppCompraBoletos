import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/services/firebase.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
@Component({
  selector: 'app-nueva-provincia',
  templateUrl: './nueva-provincia.page.html',
  styleUrls: ['./nueva-provincia.page.scss'],
})
export class NuevaProvinciaPage implements OnInit {
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
      pais: new FormControl('', Validators.required),

      descripcion: new FormControl('', Validators.required),

    });
  }

  onSubmit(value){
    let data = {
      pais: value.pais,
      descripcion: value.descripcion,
     
     
    }
    this.firebaseService.crearProvincia(data)
    .then(
      res => {
        this.router.navigate(['/provincia']);
      }
    )
  }

}





