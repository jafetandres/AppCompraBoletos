import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarPaisPage } from './actualizar-pais.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarPaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarPaisPageRoutingModule {}
