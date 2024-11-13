import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracion-rol',
  templateUrl: './configuracion-rol.component.html',
  styleUrl: './configuracion-rol.component.css'
})
export class ConfiguracionRolComponent {
  roles = [
    { name: 'Docente', canUseManoDeObra: true, canUseIgv: false },
    { name: 'Arquitecto', canUseManoDeObra: true, canUseIgv: false },
    { name: 'Estudiante de Arquitectura', canUseManoDeObra: false, canUseIgv: false },
    { name: 'Jefe', canUseManoDeObra: false, canUseIgv: false },
  ]

  viewChange() {
    console.log(this.roles);
  }
}
