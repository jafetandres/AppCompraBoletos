import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarCiudadPage } from './actualizar-ciudad.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarCiudadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarCiudadPageRoutingModule {}
