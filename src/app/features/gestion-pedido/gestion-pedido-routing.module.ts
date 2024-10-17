import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionPedidoComponent } from './gestion-pedido.component';

const routes: Routes = [
  {
    path: '',
    component: GestionPedidoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionPedidoRoutingModule { }
