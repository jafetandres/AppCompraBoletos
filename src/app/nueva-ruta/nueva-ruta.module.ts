import { NgModule } from '@angular/core';

import { CommonModule, Location } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevaRutaPageRoutingModule } from './nueva-ruta-routing.module';

import { NuevaRutaPage } from './nueva-ruta.page';
import { NuevaRutaResolver } from './nueva-ruta.resolver';

const routes: Routes = [
  {
    path: '',
    component: NuevaRutaPage
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
