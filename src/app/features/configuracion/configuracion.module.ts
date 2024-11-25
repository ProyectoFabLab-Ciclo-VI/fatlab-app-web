import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ConfiguracionRolComponent } from './components/configuracion-rol/configuracion-rol.component';
import { ConfiguracionMaquinaComponent } from './components/configuracion-maquina/configuracion-maquina.component';
import { ConfiguracionComponent } from './configuracion.component';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { CustomCheckboxComponent } from '@shared/components/custom-checkbox/custom-checkbox.component';


@NgModule({
  declarations: [
    ConfiguracionRolComponent,
    ConfiguracionMaquinaComponent,
    ConfiguracionComponent,
  ],
  imports: [
    CommonModule,
    CustomButtonComponent,
    ConfiguracionRoutingModule,
    CustomCheckboxComponent,
  ]
})
export class ConfiguracionModule { }
