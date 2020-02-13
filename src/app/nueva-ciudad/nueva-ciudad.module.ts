import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaCiudadPageRoutingModule } from './nueva-ciudad-routing.module';

import { NuevaCiudadPage } from './nueva-ciudad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NuevaCiudadPageRoutingModule
  ],
  declarations: [NuevaCiudadPage]
})
export class NuevaCiudadPageModule {}
