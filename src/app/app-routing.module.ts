import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'new-task',
    loadChildren: () => import('./new-task/new-task.module').then(m => m.NewTaskPageModule)
  },
  {

    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'location-select',
    loadChildren: () => import('./location-select/location-select.module').then(m => m.LocationSelectPageModule)
  },
  {
    path: 'ruta',
    loadChildren: () => import('./ruta/ruta.module').then(m => m.RutaPageModule)
  },
  {
    path: 'nueva-ruta',
    loadChildren: () => import('./nueva-ruta/nueva-ruta.module').then(m => m.NuevaRutaPageModule)
  },
  {
    path: 'provincia',
    loadChildren: () => import('./provincia/provincia.module').then(m => m.ProvinciaPageModule)
  },
  {
    path: 'pais',
    loadChildren: () => import('./pais/pais.module').then(m => m.PaisPageModule)
  },
  {
    path: 'ciudad',
    loadChildren: () => import('./ciudad/ciudad.module').then(m => m.CiudadPageModule)
  },
  {
    path: 'vehiculo',
    loadChildren: () => import('./vehiculo/vehiculo.module').then(m => m.VehiculoPageModule)
  },
  {
    path: 'nueva-provincia',
    loadChildren: () => import('./nueva-provincia/nueva-provincia.module').then(m => m.NuevaProvinciaPageModule)
  },
  {
    path: 'actualizar-pais/:id',
    loadChildren: () => import('./actualizar-pais/actualizar-pais.module').then(m => m.ActualizarPaisPageModule)
  }
  , {
    path: 'nuevo-boleto',
    loadChildren: () => import('./nuevo-boleto/nuevo-boleto.module').then(m => m.NuevoBoletoPageModule)
  }
  ,
   {
    path: 'nueva-ciudad',
    loadChildren: () => import('./nueva-ciudad/nueva-ciudad.module').then(m => m.NuevaCiudadPageModule)
  }
  ,
  {
    path: 'nuevo-vehiculo',
    loadChildren: () => import('./nuevo-vehiculo/nuevo-vehiculo.module').then(m => m.NuevoVehiculoPageModule)

  },
  {
    path: 'actualizar-vehiculo/:id',
    loadChildren: () => import('./actualizar-vehiculo/actualizar-vehiculo.module').then(m => m.ActualizarVehiculoPageModule)
  },

  {
    path: 'boleto',
    loadChildren: () => import('./boleto/boleto.module').then(m => m.BoletoPageModule)
  },

  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  }
  ,

  {
    path: 'nuevo-pais',
    loadChildren: () => import('./nuevo-pais/nuevo-pais.module').then(m => m.NuevoPaisPageModule)
  },
  {
    path: 'actualizar-ciudad/:id',
    loadChildren: () => import('./actualizar-ciudad/actualizar-ciudad.module').then( m => m.ActualizarCiudadPageModule)
  },
  {
    path: 'forma-pago',
    loadChildren: () => import('./forma-pago/forma-pago.module').then( m => m.FormaPagoPageModule)
  },
  {
    path: 'nuevo-forma-pago',
    loadChildren: () => import('./nuevo-forma-pago/nuevo-forma-pago.module').then( m => m.NuevoFormaPagoPageModule)
  },
  {
    path: 'actualizar-forma-pago/:id',
    loadChildren: () => import('./actualizar-forma-pago/actualizar-forma-pago.module').then( m => m.ActualizarFormaPagoPageModule)
  },
  {
    path: 'factura-cabecera',
    loadChildren: () => import('./factura-cabecera/factura-cabecera.module').then( m => m.FacturaCabeceraPageModule)
  },
  {
    path: 'factura',
    loadChildren: () => import('./factura/factura.module').then( m => m.FacturaPageModule)
  },

  // {
  //   path: 'factura-detalle',
  //   loadChildren: () => import('./factura-detalle/factura-detalle.module').then( m => m.FacturaDetallePageModule)
  // }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
