import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletoPageRoutingModule } from './boleto-routing.module';

import { BoletoPage } from './boleto.page';
import { Routes, RouterModule } from '@angular/router';
import { BoletoResolver } from './boleto.resolver';
import { HomePageModule } from '../home/home.module';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: BoletoPage,
    resolve: {
      data: BoletoResolver
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
  declarations: [BoletoPage],
  providers: [
    BoletoResolver
  ]
})
export class BoletoPageModule {}
