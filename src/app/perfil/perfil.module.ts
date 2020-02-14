import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { PerfilResolver } from './perfil.resolver';
const routes: Routes = [
  {
    path: '',
    component: PerfilPage,
    resolve: {
      data: PerfilResolver
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
  declarations: [PerfilPage],
  providers: [
    PerfilResolver
  ]
})
export class PerfilPageModule {}
