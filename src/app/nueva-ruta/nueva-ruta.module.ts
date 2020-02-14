import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaRutaPageRoutingModule } from './nueva-ruta-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { NuevaRutaPage } from './nueva-ruta.page';
import { NuevaRutaResolver } from './nueva-ruta.resolver';

const routes: Routes = [
  {
    path: '',
    component: NuevaRutaPage,
    resolve: {
      data: NuevaRutaResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NuevaRutaPage],
  providers : [
    NuevaRutaResolver
  ]
})
export class NuevaRutaPageModule {}
