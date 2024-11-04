import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionPedidoRoutingModule } from './gestion-pedido-routing.module';
import { GestionPedidoComponent } from './gestion-pedido.component';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './gestion.service';

@NgModule({
  declarations: [
    GestionPedidoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GestionPedidoRoutingModule,
  ],
  providers: [CustomerService],
})
export class GestionPedidoModule { }
