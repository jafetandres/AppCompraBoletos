import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarFormaPagoPage } from './actualizar-forma-pago.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarFormaPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarFormaPagoPageRoutingModule {}
