import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActualizarPaisPageRoutingModule } from './actualizar-pais-routing.module';

import { ActualizarPaisPage } from './actualizar-pais.page';
import { ActualizarPaisResolver } from './actualizar-pais.resolver';

const routes: Routes = [
  {
    path: '',
    component: ActualizarPaisPage,
    resolve: {
      data: ActualizarPaisResolver
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
  declarations: [ActualizarPaisPage],
  providers:[ActualizarPaisResolver]

})
export class ActualizarPaisPageModule {}
