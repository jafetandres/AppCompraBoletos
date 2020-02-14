import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-actualizar-pais',
  templateUrl: './actualizar-pais.page.html',
  styleUrls: ['./actualizar-pais.page.scss'],
})
export class ActualizarPaisPage implements OnInit {
  validations_form: FormGroup;
  item: any;
  load: boolean = false;



  constructor(
  
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
      descripcion: new FormControl(this.item.descripcion, Validators.required)
    });
  }

  onSubmit(value){
    let data = {
  
      descripcion: value.descripcion,
      
    }
    this.firebaseService.actualizarPais(this.item.id,data)
    .then(
      res => {
        this.router.navigate(["/pais"]);
      }
    )
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: 'Quieres borrar el registro? ' + this.item.title + '?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Si',
          handler: () => {
            this.firebaseService.eliminarPais(this.item.id)
            .then(
              res => {
                this.router.navigate(["/pais"]);
              },
              err => console.log(err)
            )
          }
        }
      ]
    });
    await alert.present();
  }


  async presentLoading(loading) {
    return await loading.present();
  }

}

