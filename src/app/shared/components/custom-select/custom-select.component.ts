import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { SelectItem } from '@core/index.model.system';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.css',
  standalone: true,
  imports: [LoaderComponent],
})
export class CustomSelectComponent {
  @ViewChild('SelectedComponente') selectedComponente!: any;

  @Input() roundedPx: string = '12px';
  @Input({required: true}) options: SelectItem[] = [];
  @Input() placeholder: string = 'Seleccione una opción';
  @Input() label!: string;
  @Input() disabled: boolean = false;
  @Input() hasBoldResult: boolean = false;
  @Input() isDefer: boolean = false;

  @Input() selectedValue: SelectItem | undefined;
  @Output() selectedValueChange = new EventEmitter<SelectItem>();

  panelOpen: boolean = false;

  @HostListener('document:click', ['$event'])
  clickEvent($event: any) {
    if(this.selectedComponente && !this.selectedComponente.nativeElement.contains($event.target)) {
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

  public getViewValue(itemSelect: SelectItem | undefined): string {
    if(!itemSelect || itemSelect.viewValue == '') return this.placeholder;
    const selectedOption = this.options.find(option => option.value === itemSelect.value);
    return selectedOption ? selectedOption.viewValue : this.placeholder;
  }
}
