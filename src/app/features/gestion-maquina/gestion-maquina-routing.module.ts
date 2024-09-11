import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionMaquinaComponent } from './gestion-maquina.component';

const routes: Routes = [
  {
    path: '',
    component: GestionMaquinaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionMaquinaRoutingModule { }
