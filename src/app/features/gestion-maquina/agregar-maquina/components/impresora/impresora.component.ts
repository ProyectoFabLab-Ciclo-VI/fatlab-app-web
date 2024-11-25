import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CustomSelectComponent } from '@shared/components/custom-select/custom-select.component';

import { SelectItem } from '@core/index.model.system';

@Component({
  selector: 'app-impresora',
  templateUrl: './impresora.component.html',
  styleUrl: './impresora.component.css',
  standalone: true,
  imports: [CustomSelectComponent, ReactiveFormsModule],
})
export class ImpresoraComponent {
  @Input() parentForm!: FormGroup;
  @Output() parentFormChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  estados: SelectItem[] = [
    { value: null, viewValue: 'Activo' },
    { value: null, viewValue: 'En mantenimiento' },
    { value: null, viewValue: 'Inactivo' },
  ];

  sendChange(){
    this.parentFormChange.emit(this.parentForm);
  }
}
