import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaProvinciaPageRoutingModule } from './nueva-provincia-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { NuevaProvinciaPage } from './nueva-provincia.page';
import { NuevaProvinciaResolver } from './nueva-provincia.resolver';
const routes: Routes = [
  {
    path: '',
    component: NuevaProvinciaPage,
    resolve: {
      data: NuevaProvinciaResolver
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
  declarations: [NuevaProvinciaPage],
  providers: [
    NuevaProvinciaResolver
  ]
})
export class NuevaProvinciaPageModule {}
