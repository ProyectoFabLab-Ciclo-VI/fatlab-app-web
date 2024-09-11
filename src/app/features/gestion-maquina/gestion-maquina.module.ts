import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionMaquinaRoutingModule } from './gestion-maquina-routing.module';
import { GestionMaquinaComponent } from './gestion-maquina.component';


@NgModule({
  declarations: [
    GestionMaquinaComponent
  ],
  imports: [
    CommonModule,
    GestionMaquinaRoutingModule
  ]
})
export class GestionMaquinaModule { }
