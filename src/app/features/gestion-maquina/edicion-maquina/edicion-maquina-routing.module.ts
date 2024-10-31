import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionMaquinaComponent } from './edicion-maquina.component';

const routes: Routes = [
  {
    path: '',
    component: EdicionMaquinaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdicionMaquinaRoutingModule { }
