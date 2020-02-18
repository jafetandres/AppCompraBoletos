import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FacturaDetallePage } from '../factura-detalle/factura-detalle.page';
import { AuthService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/services/firebase.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-factura-cabecera',
  templateUrl: './factura-cabecera.page.html',
  styleUrls: ['./factura-cabecera.page.scss'],
})
export class FacturaCabeceraPage implements OnInit {
  items: Array<any>;
  item: any;
  validations_form: FormGroup;
  constructor(
    public modalCtrl: ModalController,
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
        fecha: value.fecha,
        subtotal: value.subtotal,
        iva: value.iva,
        total: value.total,
      }
      this.firebaseService.crearVehiculo(data)
      .then(
        res => {
          this.router.navigate(['/factura']);
        }
      );
    }
    resetFields() {
      this.validations_form = this.formBuilder.group({
        fecha: new FormControl('', Validators.required),
        subtotal: new FormControl('', Validators.required),
        iva: new FormControl('', Validators.required),
        total: new FormControl('', Validators.required),
      });
    }
  
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
        fecha: new FormControl(this.item.fecha, Validators.required),
        subtotal: new FormControl(this.item.subtotal, Validators.required),
        iva: new FormControl(this.item.iva, Validators.required),
        total: new FormControl(this.item.total, Validators.required),
      });
    }
  // ngOnInit() {
  // }
  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: FacturaDetallePage,
      componentProps: {
        fecha: 'Douglas',
        apellido: 'Adams',
      }
    });
    await modal.present();

  //   const {data} = await modal.onDidDismiss();//Escucha todo lo que viene 

  //   console.log(data);
  }
//
}
