import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionInsumoRoutingModule } from './gestion-insumo-routing.module';
import { GestionInsumoComponent } from './gestion-insumo.component';


@NgModule({
  declarations: [
    GestionInsumoComponent
  ],
  imports: [
    CommonModule,
    GestionInsumoRoutingModule
  ]
})
export class GestionInsumoModule { }
