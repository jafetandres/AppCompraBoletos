import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterModule, Routes } from '@angular/router';
import { ActualizarFormaPagoPage } from './actualizar-forma-pago.page';
import { ActualizarFormaPagoResolver } from './actualizar-forma-pago.resolver';


const routes: Routes = [
  {
    path: '',
    component: ActualizarFormaPagoPage,
    resolve: {
      data: ActualizarFormaPagoResolver
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
  declarations: [ActualizarFormaPagoPage],
  providers:[ActualizarFormaPagoResolver]
})
export class ActualizarFormaPagoPageModule {}
