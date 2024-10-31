import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from '../../../core/index.model.system';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class CustomSelectComponent {
  @Input({required: true}) options: SelectItem[] = [];
  @Input() placeholder: string = 'Seleccione una opción';
  @Input() disabled: boolean = false;
  @Input() labelName: string = "";

  @Output() selectionChange = new EventEmitter<any>();

  selectedValue: any;
  panelOpen: boolean = false;

  togglePanel() {
    if (!this.disabled) {
      this.panelOpen = !this.panelOpen;
    }
  }

  selectOption(option: any) {
    this.selectedValue = option.value;
    this.selectionChange.emit(this.selectedValue);
    this.panelOpen = false;
  }

  getViewValue(value: any): string {
    const selectedOption = this.options.find(option => option.value === value);
    return selectedOption ? selectedOption.viewValue : '';
  }
}
