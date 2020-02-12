import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HomeResolver } from './home.resolver';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {
      data: HomeResolver
    }
  }
];
console.log(routes.values);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage],
  providers: [
    HomeResolver
  ]
})
export class HomePageModule {}
