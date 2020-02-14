import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FirebaseService } from 'src/services/firebase.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  // items: Array<any>;
  usuario: any;
  validations_form: FormGroup;
  image: any;


  

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    private imagePicker: ImagePicker,
    private webview: WebView,
    private firebaseService: FirebaseService





  ) { }

  ngOnInit() {
   

    if (this.route && this.route.data) {
      this.getData();
  }
}


getData(){
  this.route.data.subscribe(routeData => {
   let data = routeData['data'];
   if (data) {
     this.usuario = data;
     this.image=this.usuario.photoURL;
     console.log("ruta imagen perfil"+this.usuario.photoURL)
  
    //  this.image = this.item.image;
   }
  })
  this.validations_form = this.formBuilder.group({
    email: new FormControl(this.usuario.email, Validators.required),
    displayName: new FormControl(this.usuario.displayName, Validators.required)
  });
}
async onSubmit(value){
  let data = {
    email: value.email,
    displayName: value.displayName,
    photoURL: this.image

   
  }
  this.firebaseService.actualizarPerfil(value.photoURL,data)
  .then(
    res => {
      this.router.navigate(["/home"]);
    }
  )
}


openImagePicker(){
  this.imagePicker.hasReadPermission()
  .then((result) => {
    if(result == false){
      // no callbacks required as this opens a popup which returns async
      this.imagePicker.requestReadPermission();
    }
    else if(result == true){
      this.imagePicker.getPictures({
        maximumImagesCount: 1
      }).then(
        (results) => {
          for (var i = 0; i < results.length; i++) {
            this.uploadImageToFirebase(results[i]);
          }
        }, (err) => console.log(err)
      );
    }
  }, (err) => {
    console.log(err);
  });
}

async uploadImageToFirebase(image){
  const loading = await this.loadingCtrl.create({
    message: 'Por favor espere...'
  });
  const toast = await this.toastCtrl.create({
    message: 'La imagen ha sido actualizada.',
    duration: 3000
  });
  this.presentLoading(loading);
  let image_src = this.webview.convertFileSrc(image);

  //uploads img to firebase storage

  this.firebaseService.uploadImage(image_src)
  .then(photoURL => {
    this.image = photoURL;
    loading.dismiss();
    toast.present();
  }, err =>{
    console.log(err);
  })
}
  async presentLoading(loading) {
    return await loading.present();
  }

}
