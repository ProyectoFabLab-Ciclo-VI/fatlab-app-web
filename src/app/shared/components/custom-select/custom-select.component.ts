import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { SelectItem } from '../../../core/index.model.system';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.css',
  standalone: true,
  imports: [],
})
export class CustomSelectComponent {
  @ViewChild('SelectedComponente') selectedComponente!: any;

  @Input({required: true}) options: SelectItem[] = [];
  @Input() placeholder: string = 'Seleccione una opción';
  @Input() label!: string;
  @Input() disabled: boolean = false;
  
  @Input() selectedValue!: SelectItem;
  @Output() selectedValueChange = new EventEmitter<SelectItem>();

  panelOpen: boolean = false;

  @HostListener('document:click', ['$event'])
  clickEvent($event: any) {
    if(!this.selectedComponente.nativeElement.contains($event.target)) {
      this.closePanel()
    };
  }

  private closePanel() {
    this.panelOpen = false;
  }

  public togglePanel() {
    if (!this.disabled) {
      this.panelOpen = !this.panelOpen;
    }
  }

  public selectOption(option: SelectItem) {
    this.selectedValue = option;
    this.selectedValueChange.emit(this.selectedValue);
    this.closePanel();
  }

  public getViewValue(itemSelect: SelectItem): string {
    if(!itemSelect || itemSelect.viewValue == '') return this.placeholder;
    const selectedOption = this.options.find(option => option.value === itemSelect.value);
    return selectedOption ? selectedOption.viewValue : this.placeholder;
  }
}
