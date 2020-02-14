import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoBoletoPageRoutingModule } from './nuevo-boleto-routing.module';

import { NuevoBoletoPage } from './nuevo-boleto.page';
import { RouterModule, Routes } from '@angular/router';
import { NuevoBoletoResolver } from './nuevo-boleto.resolver';


const routes: Routes = [
  {
    path: '',
    component: NuevoBoletoPage,
    resolve: {
      data: NuevoBoletoResolver
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
  declarations: [NuevoBoletoPage],
  providers: [
    NuevoBoletoResolver
  ]
})
export class NuevoBoletoPageModule {}
