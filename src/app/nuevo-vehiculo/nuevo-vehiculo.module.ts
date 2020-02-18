import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { NuevoVehiculoPage } from './nuevo-vehiculo.page';
import { NuevoVehiculoResolver } from './nuevo-vehiculo.resolver';

const routes: Routes = [
  {
    path: '',
    component: NuevoVehiculoPage,
    resolve: {
      data: NuevoVehiculoResolver
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NuevoVehiculoPage],
  providers: [
    NuevoVehiculoResolver
  ]
})
export class NuevoVehiculoPageModule {}
