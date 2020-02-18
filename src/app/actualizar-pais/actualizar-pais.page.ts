import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Pais } from 'src/models/pais.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-actualizar-pais',
  templateUrl: './actualizar-pais.page.html',
  styleUrls: ['./actualizar-pais.page.scss'],
})
export class ActualizarPaisPage implements OnInit {
  private paisDoc: AngularFirestoreDocument<Pais>;
  pais: Observable<Pais>;
  id;


  constructor(
    public afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,

  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.paisDoc = afs.doc<Pais>('pais/' + id);
    this.pais = this.paisDoc.valueChanges();
  }

  ngOnInit() {
  }

  guardar(pais: Pais) {
    this.paisDoc.update(pais);
    
  }

  onSubmit(pais) {
    const paisactual: Pais = {
      id: pais.id,
      descripcion: pais.descripcion
    };
    this.paisDoc.update(paisactual);
    this.router.navigate(["/pais"]);
  }

}

