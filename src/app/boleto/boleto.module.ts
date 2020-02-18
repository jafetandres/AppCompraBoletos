import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletoPageRoutingModule } from './boleto-routing.module';

import { BoletoPage } from './boleto.page';
import { Routes, RouterModule } from '@angular/router';
import { BoletoResolver } from './boleto.resolver';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { SimpleServiceModule } from 'src/components/simple-service/simple-service.module';
]

// const routes: Routes = [
//   {
//     path: '',
//     component: BoletoPage,
//     resolve: {
//       data: BoletoResolver
//     }
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule,
    IonicModule,
    SimpleServiceModule,
    BoletoPageRoutingModule

  
  ],
  declarations: [BoletoPage],
  providers: [
    BoletoResolver
  ]
})
export class BoletoPageModule {}
