import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { Routes, RouterModule } from '@angular/router';
import { NuevoFormaPagoPage } from './nuevo-forma-pago.page';
import { NuevoFormaPagoResolver } from './nuevo-forma-pago.resolver';
const routes: Routes = [
  {
    path: '',
    component: NuevoFormaPagoPage,
    resolve: {
      data: NuevoFormaPagoResolver
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
  declarations: [NuevoFormaPagoPage],
  providers: [
    NuevoFormaPagoResolver
  ]
})
export class NuevoFormaPagoPageModule {}
