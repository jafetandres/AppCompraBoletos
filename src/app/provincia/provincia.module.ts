import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvinciaPageRoutingModule } from './provincia-routing.module';

import { ProvinciaPage } from './provincia.page';
import { ProvinciaResolver } from './provincia.resolver';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProvinciaPage,
    resolve: {
      data: ProvinciaResolver
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
  declarations: [ProvinciaPage],
  providers: [
    ProvinciaResolver
  ]
})
export class ProvinciaPageModule {}
