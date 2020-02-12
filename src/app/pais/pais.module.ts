import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaisPageRoutingModule } from './pais-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { PaisPage } from './pais.page';
import { PaisResolver } from './pais.resolver';

const routes: Routes = [
  {
    path: '',
    component: PaisPage,
    resolve: {
      data: PaisResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaisPageRoutingModule
  ],
  declarations: [PaisPage]

})
export class PaisPageModule {}
