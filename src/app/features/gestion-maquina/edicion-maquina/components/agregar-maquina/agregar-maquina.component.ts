import { Component } from '@angular/core';
import { SelectItem } from '../../../../../core/index.model.system';

@Component({
  selector: 'app-agregar-maquina',
  templateUrl: './agregar-maquina.component.html',
  styleUrl: './agregar-maquina.component.css'
})
export class AgregarMaquinaComponent {
  tipoMaquina: SelectItem[] = [
    { value: 1, viewValue: 'Ploteo' },
    { value: 2, viewValue: 'Corte laser' },
    { value: 3, viewValue: 'Impresora' },
    { value: 4, viewValue: 'Modelado' },
  ];

  estadoMaquina: SelectItem[] = [
    { value: 1, viewValue: 'Activo' },
    { value: 2, viewValue: 'En mantenimiento' },
    { value: 3, viewValue: 'Inactivo' },
  ];
}
