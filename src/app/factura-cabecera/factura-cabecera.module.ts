import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturaCabeceraPageRoutingModule } from './factura-cabecera-routing.module';

import { FacturaCabeceraPage } from './factura-cabecera.page';
import { RouterModule, Routes } from '@angular/router';
import { FacturaDetallePage } from '../factura-detalle/factura-detalle.page';
import { FacturaDetallePageModule } from '../factura-detalle/factura-detalle.module';
import { FacturaCabeceraResolver } from './factura-cabecera.resolver';
const routes: Routes = [
  {
    path: '',
    component: FacturaCabeceraPage,
    resolve: {
      data: FacturaCabeceraResolver
    }
  }
];
@NgModule({
  entryComponents: [
    FacturaDetallePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FacturaDetallePageModule
  ],
  declarations: [FacturaCabeceraPage],
  providers: [
    FacturaCabeceraResolver
  ]
})
export class FacturaCabeceraPageModule {}
