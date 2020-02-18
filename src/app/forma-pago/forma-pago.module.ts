import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormaPagoPageRoutingModule } from './forma-pago-routing.module';

import { FormaPagoPage } from './forma-pago.page';
import { RouterModule, Routes } from '@angular/router';
import { FormaPagoResolver } from './forma-pago.resolver';

const routes: Routes = [
  {
    path: '',
    component: FormaPagoPage,
    resolve: {
      data: FormaPagoResolver
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
  declarations: [FormaPagoPage],
  providers: [
    FormaPagoResolver
  ]
})
export class FormaPagoPageModule {}
