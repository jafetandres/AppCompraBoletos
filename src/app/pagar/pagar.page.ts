import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { Factura } from 'src/models/factura.model';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage implements OnInit {
  precio = "";
  rutaCompleta = "";
  total = "";
  factura: Observable<Factura>;
  private facturasCollection: AngularFirestoreCollection<Factura>;
  constructor(
    private route: ActivatedRoute,
    public afs: AngularFirestore,
    private router: Router,
    ) {
    this.facturasCollection = this.afs.collection<Factura>('factura');
    this.precio = this.route.snapshot.paramMap.get('precio');
    this.rutaCompleta = this.route.snapshot.paramMap.get('rutacompleta');

  }

  ngOnInit() {
    console.log(this.precio);
    this.precio = this.route.snapshot.paramMap.get('precio');
    this.rutaCompleta = this.route.snapshot.paramMap.get('rutacompleta');
    var totalActual = +this.precio * 0.12 + Number(this.precio);
    this.total = totalActual.toString();
    console.log(this.total);
  }

  pagar() {
    const id = this.afs.createId();
    const detalle = this.rutaCompleta;
    const idUsuario=firebase.auth().currentUser.uid;
    const subtotal=this.precio;
    const total=this.total;
    const factura: Factura = { id,  detalle, idUsuario, subtotal, total };
    this.facturasCollection.doc(id).set(factura);
    this.router.navigate(["/home"]);
  


  }

}
