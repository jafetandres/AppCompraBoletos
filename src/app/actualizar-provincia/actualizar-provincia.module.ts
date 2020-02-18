import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule} from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActualizarProvinciaPageRoutingModule } from './actualizar-provincia-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarProvinciaPage } from './actualizar-provincia.page';
import { ActualizarProvinciaResolver } from './actualizar-provincia.resolver';


const routes: Routes = [
  {
    path: '',
    component: ActualizarProvinciaPage,
    resolve: {
      data: ActualizarProvinciaResolver
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
  declarations: [ActualizarProvinciaPage],
  providers:[ActualizarProvinciaResolver]
})
export class ActualizarProvinciaPageModule {}
