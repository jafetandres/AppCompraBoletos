import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPaisPage } from './nuevo-pais.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPaisPageRoutingModule {}
