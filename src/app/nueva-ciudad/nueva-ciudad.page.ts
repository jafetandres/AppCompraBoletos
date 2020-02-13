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
      this.firebaseService.crearCiudad(data)
      .then(
        res => {
          this.router.navigate(["/home"]);
        }
      )
    }
}
