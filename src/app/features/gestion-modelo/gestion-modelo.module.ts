import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionModeloRoutingModule } from './gestion-modelo-routing.module';
import { EdicionModeloPredefinidoComponent } from './edicion-modelo-predefinido/edicion-modelo-predefinido.component';

import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { ImageUploaderComponent } from '@shared/components/image-uploader/image-uploader.component';
import { CustomSelectComponent } from '@shared/components/custom-select/custom-select.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EdicionModeloPredefinidoComponent,
  ],
  imports: [
    CommonModule,
    GestionModeloRoutingModule,
    CustomButtonComponent,
    ImageUploaderComponent,
    CustomSelectComponent,
    CustomButtonComponent,
    FormsModule,
  ]
})
export class GestionModeloModule { }
