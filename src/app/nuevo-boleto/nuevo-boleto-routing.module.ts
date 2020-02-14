import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoBoletoPage } from './nuevo-boleto.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoBoletoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoBoletoPageRoutingModule {}
