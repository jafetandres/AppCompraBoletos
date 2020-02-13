import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaCiudadPage } from './nueva-ciudad.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaCiudadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaCiudadPageRoutingModule {}
