import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarVehiculoPage } from './actualizar-vehiculo.page';
import { VehiculoActualizarResolver } from './actualizar-vehiculo.resolver';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ActualizarVehiculoPage,
    resolve: {
      data: VehiculoActualizarResolver
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
  declarations: [ActualizarVehiculoPage],
  providers:[VehiculoActualizarResolver]
})
export class ActualizarVehiculoPageModule {}
