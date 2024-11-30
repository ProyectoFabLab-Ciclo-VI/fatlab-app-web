import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionModeloPredefinidoComponent } from './edicion-modelo-predefinido/edicion-modelo-predefinido.component';

const routes: Routes = [
  {
    path: "",
    component: EdicionModeloPredefinidoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionModeloRoutingModule { }
