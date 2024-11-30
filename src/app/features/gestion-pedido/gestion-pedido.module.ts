import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GestionPedidoRoutingModule } from './gestion-pedido-routing.module';

import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@NgModule({
  declarations: [
    ListaPedidoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GestionPedidoRoutingModule,
    CustomButtonComponent,
    LoaderComponent,
  ],
  providers: [],
})
export class GestionPedidoModule { }
