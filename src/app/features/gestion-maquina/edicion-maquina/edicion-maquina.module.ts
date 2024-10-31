import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdicionMaquinaComponent } from './edicion-maquina.component';

import { FloatLabelComponent } from '../../../shared/components/float-label/float-label.component';
import { CustomSelectComponent } from '../../../shared/components/custom-select/custom-select.component';
import { AgregarMaquinaComponent } from './components/agregar-maquina/agregar-maquina.component';
import { EdicionMaquinaRoutingModule } from './edicion-maquina-routing.module';


@NgModule({
  declarations: [
    EdicionMaquinaComponent,
    AgregarMaquinaComponent,
  ],
  imports: [
    CommonModule,
    EdicionMaquinaRoutingModule,
    FloatLabelComponent,
    CustomSelectComponent,
  ]
})
export class EdicionMaquinaModule { }
