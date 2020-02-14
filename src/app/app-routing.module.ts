import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'new-task',
    loadChildren: () => import('./new-task/new-task.module').then( m => m.NewTaskPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'location-select',
    loadChildren: () => import('./location-select/location-select.module').then( m => m.LocationSelectPageModule)
  },
  {
    path: 'ruta',
    loadChildren: () => import('./ruta/ruta.module').then( m => m.RutaPageModule)
  },
  {
    path: 'nueva-ruta',
    loadChildren: () => import('./nueva-ruta/nueva-ruta.module').then( m => m.NuevaRutaPageModule)
  },
  {
    path: 'provincia',
    loadChildren: () => import('./provincia/provincia.module').then( m => m.ProvinciaPageModule) 
  },
  {
    path: 'pais',
    loadChildren: () => import('./pais/pais.module').then( m => m.PaisPageModule)
  },
  {
    path: 'ciudad',
    loadChildren: () => import('./ciudad/ciudad.module').then( m => m.CiudadPageModule)
  },
  {
    path: 'nueva-ciudad',
    loadChildren: () => import('./nueva-ciudad/nueva-ciudad.module').then( m => m.NuevaCiudadPageModule)
  },
  {
    path: 'nuevo-pais',
    loadChildren: () => import('./nuevo-pais/nuevo-pais.module').then( m => m.NuevoPaisPageModule)
  },
  
  {
    path: 'vehiculo',
    loadChildren: () => import('./vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
  },
  {
    path: 'nueva-provincia',
    loadChildren: () => import('./nueva-provincia/nueva-provincia.module').then( m => m.NuevaProvinciaPageModule)
  },
  {
    path: 'boleto',
    loadChildren: () => import('./boleto/boleto.module').then( m => m.BoletoPageModule)
  },
  {
    path: 'nuevo-boleto',
    loadChildren: () => import('./nuevo-boleto/nuevo-boleto.module').then( m => m.NuevoBoletoPageModule)
  },
  {
    path: 'nuevo-vehiculo',
    loadChildren: () => import('./nuevo-vehiculo/nuevo-vehiculo.module').then( m => m.NuevoVehiculoPageModule)
  }


  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
