import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiudadPageRoutingModule } from './ciudad-routing.module';

import { CiudadPage } from './ciudad.page';
import { CiudadResolver } from './ciudad.resolve';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CiudadPage,
    resolve: {
      data: CiudadResolver
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
  declarations: [CiudadPage],
  providers: [
    CiudadResolver
  ]
})
export class CiudadPageModule {}
