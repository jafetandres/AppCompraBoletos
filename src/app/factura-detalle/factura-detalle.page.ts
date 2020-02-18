import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-factura-detalle',
  templateUrl: './factura-detalle.page.html',
  styleUrls: ['./factura-detalle.page.scss'],
})
export class FacturaDetallePage implements OnInit {

  @Input() nombre;
  @Input() apellido;
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }
  salirConArgumentos(){
    this.modalCtrl.dismiss(
      {
        nombre: 'Felipe',
        apellido: 'Martinez'
      }
    );
  }
}
