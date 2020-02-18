import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Ciudad } from 'src/models/ciudad.model';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
export interface CiudadId extends Ciudad { id: string; }

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.page.html',
  styleUrls: ['./ciudad.page.scss'],
})
export class CiudadPage implements OnInit {
  private paisesCollection: AngularFirestoreCollection<Ciudad>;
  ciudades: Observable<CiudadId[]>;
  private paisDoc: AngularFirestoreDocument<Ciudad>;
  ciudad: Observable<Ciudad>;
  id;

  items: Array<any>;
  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public afs: AngularFirestore,
  ) { }

  ngOnInit() {
    // if (this.route && this.route.data) {
    //   this.getData();
    // }
    this.getCiudades();
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
        console.log(this.items);
      });
    });
  }

  async getCiudades() {
    this.paisesCollection = this.afs.collection<Ciudad>('ciudad');
    this.ciudades = this.paisesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Ciudad;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }
  async presentLoading(loading) {
    return await loading.present();
  }

  eiminar(id){
    this.paisDoc = this.afs.doc<Ciudad>('ciudad/' + id);
    this.ciudad = this.paisDoc.valueChanges();
    this.paisDoc.delete();
  }

  
}
