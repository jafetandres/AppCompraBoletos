import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoVehiculoPage } from './nuevo-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoVehiculoPageRoutingModule {}
