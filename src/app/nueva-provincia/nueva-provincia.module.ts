import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NuevaProvinciaPageRoutingModule } from './nueva-provincia-routing.module';
import { NuevaProvinciaPage } from './nueva-provincia.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NuevaProvinciaPageRoutingModule
  ],
  declarations: [NuevaProvinciaPage],
  providers: [
   
  ]
})
export class NuevaProvinciaPageModule {}
