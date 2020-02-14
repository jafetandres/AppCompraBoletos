import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-vehiculo',
  templateUrl: './actualizar-vehiculo.page.html',
  styleUrls: ['./actualizar-vehiculo.page.scss'],
})
export class ActualizarVehiculoPage implements OnInit {
  validations_form: FormGroup;
  item: any;
  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.getData();
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
      numero_asiento: new FormControl(this.item.numero_asiento, Validators.required),
    });
  }

  onSubmit(value){
    let data = {
      placa: value.placa,
      modelo: value.modelo,
      marca: value.marca,
      color: value.color,
      numero_asiento: value.numero_asiento,
    }
    this.firebaseService.actualizarVehiculo(this.item.id, data)
    .then(
      res => {
        this.router.navigate(["/vehiculo"]);
      }
    )
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}
