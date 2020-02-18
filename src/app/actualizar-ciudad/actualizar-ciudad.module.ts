import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarCiudadPage } from './actualizar-ciudad.page';
import { RouterModule, Routes } from '@angular/router';
import { CiudadActualizarResolver } from './actualizar-vehiculo.resolver';

const routes: Routes = [
  {
    path: '',
    component: ActualizarCiudadPage,
    resolve: {
      data: CiudadActualizarResolver
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
  declarations: [ActualizarCiudadPage],
  providers:[CiudadActualizarResolver]
})
export class ActualizarCiudadPageModule {}
