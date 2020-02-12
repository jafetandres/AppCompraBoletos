import { NgModule } from '@angular/core';

import { CommonModule, Location } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevaRutaPageRoutingModule } from './nueva-ruta-routing.module';

import { NuevaRutaPage } from './nueva-ruta.page';

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
    NuevaRutaPageRoutingModule
  ],
  providers: [Location],
  declarations: [NuevaRutaPage]
})
export class NuevaRutaPageModule {}
