import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaRutaPageRoutingModule } from './nueva-ruta-routing.module';

import { NuevaRutaPage } from './nueva-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaRutaPageRoutingModule
  ],
  declarations: [NuevaRutaPage]
})
export class NuevaRutaPageModule {}
