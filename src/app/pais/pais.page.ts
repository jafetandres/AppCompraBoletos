import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pais } from 'src/models/pais.model';
import { map } from 'rxjs/operators';
export interface PaisId extends Pais { id: string; }


@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {
  private paisesCollection: AngularFirestoreCollection<Pais>;
  paises: Observable<PaisId[]>;
  private paisDoc: AngularFirestoreDocument<Pais>;
  pais: Observable<Pais>;
  id;

  constructor(
    public loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.getPaises();
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

  actualizar(id){
    this.router.navigate(['/actualizar-pais', id]);
  }
  eiminar(id){
    this.paisDoc = this.afs.doc<Pais>('pais/' + id);
    this.pais = this.paisDoc.valueChanges();
    this.paisDoc.delete();
  }
disabeMenu() {
  this.menu.enable(false);
}




}
