import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
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

  onSubmit(value){
    let data = {
      pais: value.pais,
      descripcion: value.descripcion,
     
     
    }
    this.firebaseService.crearProvincia(data)
    .then(
      res => {
        this.router.navigate(['/provincia']);
      }
    )
  }

}





