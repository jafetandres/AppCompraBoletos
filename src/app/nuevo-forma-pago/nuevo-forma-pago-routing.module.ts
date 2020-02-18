import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoFormaPagoPage } from './nuevo-forma-pago.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoFormaPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoFormaPagoPageRoutingModule {}
