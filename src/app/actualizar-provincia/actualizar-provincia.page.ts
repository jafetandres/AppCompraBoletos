import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pais } from 'src/models/pais.model';
import { map } from 'rxjs/operators';
import { Provincia } from 'src/models/provincia.model';
export interface PaisId extends Pais { id: string; }

@Component({
  selector: 'app-actualizar-provincia',
  templateUrl: './actualizar-provincia.page.html',
  styleUrls: ['./actualizar-provincia.page.scss'],
})
export class ActualizarProvinciaPage implements OnInit {
  descripcion='';
  idPais='';
  validations_form: FormGroup;



  private paisesCollection: AngularFirestoreCollection<Pais>;
  paises: Observable<PaisId[]>;

  private provinciaDoc: AngularFirestoreDocument<Provincia>;
  provincia: Observable<Provincia>;
  id;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private webview: WebView,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    public afs: AngularFirestore,
  ) { 
    const id = this.route.snapshot.paramMap.get('id');
    this.provinciaDoc = afs.doc<Provincia>('provincia/' + id);
    this.provincia = this.provinciaDoc.valueChanges();
  }

  ngOnInit() {
    this.getPaises();
    
  }

  compareFn(e1, e2): boolean {
    return e1 && e2 ? e1.id == e2.id : e1 == e2;
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

  





  onSubmit(value) {
    
  }

  
}




