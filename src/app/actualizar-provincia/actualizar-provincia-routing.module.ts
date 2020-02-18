import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarProvinciaPage } from './actualizar-provincia.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarProvinciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarProvinciaPageRoutingModule {}
