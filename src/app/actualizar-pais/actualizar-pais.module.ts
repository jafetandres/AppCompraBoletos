import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarPaisPageRoutingModule } from './actualizar-pais-routing.module';
import { ActualizarPaisPage } from './actualizar-pais.page';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    
    IonicModule,
   
    ActualizarPaisPageRoutingModule
  ],
  declarations: [ActualizarPaisPage],
  providers:[]

})
export class ActualizarPaisPageModule {}
