import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/services/firebase.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
@Component({
  selector: 'app-nuevo-vehiculo',
  templateUrl: './nuevo-vehiculo.page.html',
  styleUrls: ['./nuevo-vehiculo.page.scss'],
})
export class NuevoVehiculoPage implements OnInit {
  items: Array<any>;
  item: any;
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
  onSubmit(value) {
    const data = {
      placa: value.placa,
      modelo: value.modelo,
      marca: value.marca,
      color: value.color,
      numero_asiento: value.numero_asiento
    }
    this.firebaseService.crearVehiculo(data)
    .then(
      res => {
        this.router.navigate(['/vehiculo']);
      }
    )
  }

  
  resetFields() {
    this.validations_form = this.formBuilder.group({
      placa: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      numero_asiento: new FormControl('', Validators.required),
    });
  }
  // async getData() {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'Cargando'
  //   });
  //   this.presentLoading(loading);
  //   this.route.data.subscribe(routeData => {
  //     routeData['data'].subscribe(data => {
  //       loading.dismiss();
  //       this.items = data;
  //       console.log(this.items.length);
  //     });
  //   });
  // }

  async presentLoading(loading) {
    return await loading.present();
  }

  getData(){
    this.route.data.subscribe(routeData => {
     let data = routeData['data'];
     if (data) {
       this.item = data;
     }
    })
    this.validations_form = this.formBuilder.group({
      placa: new FormControl(this.item.placa, Validators.required),
      modelo: new FormControl(this.item.modelo, Validators.required),
      marca: new FormControl(this.item.marca, Validators.required),
      color: new FormControl(this.item.color, Validators.required),
      numero_asiento: new FormControl(this.item.numero_asiento, Validators.required)
    });
  }
}
