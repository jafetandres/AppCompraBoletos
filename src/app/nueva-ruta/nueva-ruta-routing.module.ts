import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaRutaPage } from './nueva-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaRutaPageRoutingModule {}
