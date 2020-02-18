import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/services/firebase.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-nuevo-forma-pago',
  templateUrl: './nuevo-forma-pago.page.html',
  styleUrls: ['./nuevo-forma-pago.page.scss'],
})
export class NuevoFormaPagoPage implements OnInit {
  items: Array<any>;
  validations_form: FormGroup;
  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
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
    });
  }
  onSubmit(value){
    let data = {
      descripcion: value.descripcion,
    }
    this.firebaseService.crearFormaPago(data)
    .then(
      res => {
        this.router.navigate(["/forma-pago"]);
      }
    )
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
}

