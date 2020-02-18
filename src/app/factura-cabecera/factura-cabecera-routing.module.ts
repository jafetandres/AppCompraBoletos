import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturaCabeceraPage } from './factura-cabecera.page';

const routes: Routes = [
  {
    path: '',
    component: FacturaCabeceraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturaCabeceraPageRoutingModule {}
