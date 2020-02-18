import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {

  constructor(
    private menu: MenuController
  ) { }

  ngOnInit() {
  }
  disabeMenu() {
    this.menu.enable(false);
  }

}
