import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.page.html',
  styleUrls: ['./boleto.page.scss'],
})
export class BoletoPage implements OnInit {

  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando'
    });
    this.presentLoading(loading);
    
    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      })
      
    })
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
    })
  }

}