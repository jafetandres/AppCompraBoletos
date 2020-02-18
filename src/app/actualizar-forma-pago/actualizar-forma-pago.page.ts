import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-actualizar-forma-pago',
  templateUrl: './actualizar-forma-pago.page.html',
  styleUrls: ['./actualizar-forma-pago.page.scss'],
})
export class ActualizarFormaPagoPage implements OnInit {
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
    if (this.route && this.route.data) {
      this.getData();
      // this.getDataP();
    }
  }
  getData(){
    this.route.data.subscribe(routeData => {
     let data = routeData['data'];
     if (data) {
       this.item = data;
     }
    })
    this.validations_form = this.formBuilder.group({
      descripcion: new FormControl(this.item.descripcion, Validators.required),
    });
  }

  onSubmit(value){
    let data = {
      descripcion: value.descripcion,
    }
    this.firebaseService.actualizarFormaPago(this.item.id, data)
    .then(
      res => {
        this.router.navigate(["/forma-pago"]);
      }
    )
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}
