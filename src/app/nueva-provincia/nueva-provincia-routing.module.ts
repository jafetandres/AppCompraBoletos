import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaProvinciaPage } from './nueva-provincia.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaProvinciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaProvinciaPageRoutingModule {}
