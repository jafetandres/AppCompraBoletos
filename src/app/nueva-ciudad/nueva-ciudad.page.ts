import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/services/firebase.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-nueva-ciudad',
  templateUrl: './nueva-ciudad.page.html',
  styleUrls: ['./nueva-ciudad.page.scss'],
})
export class NuevaCiudadPage implements OnInit {
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
  resetFields() {

    this.validations_form = this.formBuilder.group({
      provincia: new FormControl('', Validators.required),

      descripcion: new FormControl('', Validators.required),

    });
  }

  onSubmit(value) {
    const data = {
      descripcion: value.descripcion,
    };
    this.firebaseService.crearCiudad(data)
    .then(
      res => {
        this.router.navigate([ '/ciudad']);
      }
    );
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
