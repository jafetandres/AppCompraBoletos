import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaCiudadPageRoutingModule } from './nueva-ciudad-routing.module';

import { NuevaCiudadPage } from './nueva-ciudad.page';
import { NuevaCiudadResolver } from './nueva-ciudad.resoler';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: NuevaCiudadPage,
    resolve: {
      data: NuevaCiudadResolver
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
  declarations: [NuevaCiudadPage],
  providers: [
    NuevaCiudadResolver
  ]
})
export class NuevaCiudadPageModule {}
