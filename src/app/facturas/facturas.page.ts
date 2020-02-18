import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/models/factura.model';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
export interface FacturaId extends Factura { id: string; }

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.page.html',
  styleUrls: ['./facturas.page.scss'],
})
export class FacturasPage implements OnInit {
  private facturasCollection: AngularFirestoreCollection<Factura>;
  facturas: Observable<FacturaId[]>;
  private facturaDoc: AngularFirestoreDocument<Factura>;
  factura: Observable<Factura>;
  id;

  constructor(
   
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.getFacturas();
  }

  async getFacturas() {
    this.facturasCollection = this.afs.collection<Factura>('factura');
    this.facturas = this.facturasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Factura;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

}
