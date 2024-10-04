import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from '../../features/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'gestion-insumo',
        loadChildren: () => import('../../features/gestion-insumo/gestion-insumo.module').then(m => m.GestionInsumoModule)
      },
      {
        path: 'gestion-maquina',
        loadChildren: () => import('../../features/gestion-maquina/gestion-maquina.module').then(m => m.GestionMaquinaModule)
      },
      {
        path: 'pedido',
        loadChildren: () => import('../../features/gestion-pedido/gestion-pedido.module').then(m => m.GestionPedidoModule),
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
