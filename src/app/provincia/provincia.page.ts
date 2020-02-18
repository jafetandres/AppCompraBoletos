import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Provincia } from 'src/models/provincia.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface ProvinciaId extends Provincia { id: string; }

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.page.html',
  styleUrls: ['./provincia.page.scss'],
})
export class ProvinciaPage implements OnInit {
  private provinciasCollection: AngularFirestoreCollection<Provincia>;
  provincias: Observable<ProvinciaId[]>;
  private provinciaDoc: AngularFirestoreDocument<Provincia>;
  provincia: Observable<Provincia>;
  id;
  
  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private menu: MenuController,
    
  ) { }

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

  actualizar(id){
    this.router.navigate(['/actualizar-provincia', id]);
  }
  disabeMenu() {
    this.menu.enable(false);
  }
}