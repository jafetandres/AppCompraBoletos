import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';
import { VehiculoPage } from './vehiculo.page';
import { VehiculoResolver } from './vehiculo.resolve';
import { VehiculoPageRoutingModule } from './vehiculo-routing.module';
const routes: Routes = [
  {
    path: '',
    component: VehiculoPage,
    resolve: {
      data: VehiculoResolver
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [VehiculoPage],
  providers: [
    VehiculoResolver
  ]
})
export class VehiculoPageModule {}
