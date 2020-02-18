import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/services/firebase.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Provincia } from 'src/models/provincia.model';
import { Observable } from 'rxjs';
import { Ciudad } from 'src/models/ciudad.model';
import { map } from 'rxjs/operators';
export interface ProvinciaId extends Provincia { id: string; }

@Component({
  selector: 'app-nueva-ciudad',
  templateUrl: './nueva-ciudad.page.html',
  styleUrls: ['./nueva-ciudad.page.scss'],
})
export class NuevaCiudadPage implements OnInit {
  items: Array<any>;
  validations_form: FormGroup;
  descripcion='';
  idProvincia='';
  private provinciasCollection: AngularFirestoreCollection<Provincia>;
  provincias: Observable<ProvinciaId[]>;
  provincia: Observable<Provincia>;
  private ciudadesCollection: AngularFirestoreCollection<Ciudad>;


  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    public afs: AngularFirestore,
    ) { 
      this.ciudadesCollection = this.afs.collection<Ciudad>('ciudad');

    }

    ngOnInit() {
      this.getProvincias();
    }
    
 
    async getProvincias() {
      this.provinciasCollection = this.afs.collection<Provincia>('provincia');
      this.provincias = this.provinciasCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Provincia;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  
    }
    onSubmit(){
      const id = this.afs.createId();
      const descripcion = this.descripcion;
      const idProvincia=this.idProvincia
      const ciudad: Ciudad = { id, idProvincia, descripcion };
      this.ciudadesCollection.doc(id).set(ciudad);
      this.router.navigate(["/ciudad"]);
     
    }
    
}
