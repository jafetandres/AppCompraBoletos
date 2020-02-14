import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/services/firebase.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
@Component({
  selector: 'app-nuevo-pais',
  templateUrl: './nuevo-pais.page.html',
  styleUrls: ['./nuevo-pais.page.scss'],
})
export class NuevoPaisPage implements OnInit {
  validations_form: FormGroup;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView
  ) { }

  ngOnInit() {
    this.resetFields();
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
    this.firebaseService.crearPais(data)
    .then(
      res => {
        this.router.navigate(["/pais"]);
      }
    )
  }

}



