import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import {Pais} from 'src/models/pais.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Provincia } from 'src/models/provincia.model';
import { map } from 'rxjs/operators';
export interface PaisId extends Pais { id: string; }

@Component({
  selector: 'app-nueva-provincia',
  templateUrl: './nueva-provincia.page.html',
  styleUrls: ['./nueva-provincia.page.scss'],
})
export class NuevaProvinciaPage implements OnInit {
  descripcion='';
  idPais='';
 
  validations_form: FormGroup;
  private paisesCollection: AngularFirestoreCollection<Pais>;
  paises: Observable<PaisId[]>;
  provincia: Observable<Provincia>;
  

  private provinciasCollection: AngularFirestoreCollection<Provincia>;
 
  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    public afs: AngularFirestore,
  ) { 

   
    this.provinciasCollection = this.afs.collection<Provincia>('provincia');
  }

  ngOnInit() {
  this.getPaises();
  }
  resetFields() {
    this.validations_form = this.formBuilder.group({
      descripcion: new FormControl('', Validators.required),

    });
  }


ver(){
  console.log("idPais"+this.idPais);
  console.log("idPais"+this.descripcion);

}


  async getPaises() {
    this.paisesCollection = this.afs.collection<Pais>('pais');
    this.paises = this.paisesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Pais;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }


  onSubmit(){
    const id = this.afs.createId();
    const descripcion = this.descripcion;
    const idPais=this.idPais
    const provincia: Provincia = { id, idPais, descripcion };
    this.provinciasCollection.doc(id).set(provincia);
    this.router.navigate(["/provincia"]);
   
  }

}





