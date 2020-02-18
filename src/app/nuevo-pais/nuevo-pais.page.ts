import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Pais } from 'src/models/pais.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-nuevo-pais',
  templateUrl: './nuevo-pais.page.html',
  styleUrls: ['./nuevo-pais.page.scss'],
})
export class NuevoPaisPage implements OnInit {
  validations_form: FormGroup;
  private paisesCollection: AngularFirestoreCollection<Pais>;
  paises: Observable<Pais[]>;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private formBuilder: FormBuilder,

    public afs: AngularFirestore,
  ) {
    this.paisesCollection = this.afs.collection<Pais>('pais');
  }

  ngOnInit() {
    this.resetFields();
  }
  resetFields() {
    this.validations_form = this.formBuilder.group({
      descripcion: new FormControl('', Validators.required),

    });
  }



  onSubmit(value) {
    const id = this.afs.createId();
    const descripcion = value.descripcion;
    const pais: Pais = { id, descripcion };
    this.paisesCollection.doc(id).set(pais);
    this.router.navigate(["/pais"]);



  }



}