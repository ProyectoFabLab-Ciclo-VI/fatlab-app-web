import { Component } from '@angular/core';
import { SelectItem } from '../../../../../core/index.model.system';

import { CustomSelectComponent } from '../../../../../shared/components/custom-select/custom-select.component';

@Component({
  selector: 'app-impresora',
  templateUrl: './impresora.component.html',
  styleUrl: './impresora.component.css',
  standalone: true,
  imports: [CustomSelectComponent],
})
export class ImpresoraComponent {
  categoriasInsumo: SelectItem[] = [
    { value: 1, viewValue: 'Filamento x2' },
    { value: 2, viewValue: 'Oslos' },
    { value: 3, viewValue: 'Bimbom' },
    { value: 4, viewValue: 'Logeor' },
  ];
  
  estados: SelectItem[] = [
    { value: 1, viewValue: 'Activo' },
    { value: 2, viewValue: 'En mantenimiento' },
    { value: 3, viewValue: 'Inactivo' },
  ];
}
