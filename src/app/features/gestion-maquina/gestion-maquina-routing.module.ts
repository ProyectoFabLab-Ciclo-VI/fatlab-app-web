import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionMaquinaComponent } from './edicion-maquina/edicion-maquina.component';

const routes: Routes = [
  {
    path: 'edicion',
    loadChildren: () => import('./edicion-maquina/edicion-maquina.module').then(m => m.EdicionMaquinaModule),
  },
  {
    path: '',
    redirectTo: 'edicion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionMaquinaRoutingModule { }
