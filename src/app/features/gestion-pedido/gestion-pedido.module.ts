import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionPedidoRoutingModule } from './gestion-pedido-routing.module';
import { GestionPedidoComponent } from './gestion-pedido.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './gestion.service';

@NgModule({
  declarations: [
    GestionPedidoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    GestionPedidoRoutingModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
  ],
  providers: [CustomerService],
})
export class GestionPedidoModule { }
