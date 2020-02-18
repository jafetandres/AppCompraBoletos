import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NuevoPaisPageRoutingModule } from './nuevo-pais-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NuevoPaisPage } from './nuevo-pais.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NuevoPaisPageRoutingModule
  ],
  declarations: [NuevoPaisPage]
})
export class NuevoPaisPageModule { }
