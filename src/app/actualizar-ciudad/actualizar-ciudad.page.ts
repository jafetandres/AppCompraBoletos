import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-actualizar-ciudad',
  templateUrl: './actualizar-ciudad.page.html',
  styleUrls: ['./actualizar-ciudad.page.scss'],
})
export class ActualizarCiudadPage implements OnInit {
  item: any;
  items: Array<any>;
  validations_form: FormGroup;
  constructor(
    private imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetFields();
    
      if (this.route && this.route.data) {
        this.getData();
        // this.getDataP();
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
        provincia: new FormControl('', Validators.required),
        descripcion: new FormControl('', Validators.required),
      });
    }
  getData(){
    this.route.data.subscribe(routeData => {
     let data = routeData['data'];
     if (data) {
       
       this.item = data;
     }
     
    });
    this.validations_form = this.formBuilder.group({
      provincia: new FormControl(this.item.provincia, Validators.required),
      descripcion: new FormControl(this.item.descripcion, Validators.required),
    });
  }


  onSubmit(value){
    let data = {
      provincia: value.provincia,
      descripcion: value.descripcion,
    }
    this.firebaseService.actualizarCiudad(this.item.id, data)
    .then(
      res => {
        this.router.navigate(["/ciudad"]);
      }
    )
  }
  async getDataP() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando'
    });
    this.presentLoading(loading);
    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      });
    });
  }
  async presentLoading(loading) {
    return await loading.present();
  }

}
