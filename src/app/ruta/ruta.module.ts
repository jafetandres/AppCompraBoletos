import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutaPageRoutingModule } from './ruta-routing.module';

import { RutaPage } from './ruta.page';
import { Routes, RouterModule } from '@angular/router';
import { RutaResolver } from './ruta.resolver';

const routes: Routes = [
  {
    path: '',
    component: RutaPage,
    resolve: {
      data: RutaResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RutaPage],
  providers: [
    RutaResolver
  ]
})
export class RutaPageModule {}
