import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { LoadingController, NavController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/services/firebase.service';
@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.page.html',
  styleUrls: ['./forma-pago.page.scss'],
})
export class FormaPagoPage implements OnInit {
  items: Array<any>;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private menu: MenuController
  ) { }

  ngOnInit() {
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
        console.log(this.items);
      });
    });
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  logout(){
    this.authService.doLogout()
    .then(res => {
      this.router.navigate([""]);
    }, err => {
      console.log(err);
    });
  }

actualizar(vehiculoId){
  console.log(vehiculoId);
  this.router.navigate(['/actualizar-forma-pago', vehiculoId]);
}
eiminar(vehicle ){
  this.firebaseService.deleteFormaPago(vehicle);
}

disabeMenu() {
  this.menu.enable(false);
};
}