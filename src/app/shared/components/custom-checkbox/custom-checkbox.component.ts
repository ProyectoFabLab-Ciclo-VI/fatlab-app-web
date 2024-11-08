import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrl: './custom-checkbox.component.css',
  standalone: true,
  imports: [],
})
export class CustomCheckboxComponent {
  @Input() checkboxSize: 'sm' | 'md' | 'lg' = 'sm';
  @Input() isDisabled: boolean = false;
  
  heightSize = {
    sm : '24px',
    md : '32px',
    lg : '40px',
  }

  @Input({ required: true }) isChecked: boolean = false;
  @Output() isCheckedChange = new EventEmitter<boolean>();

  toggleCheckbox() {
    if (this.isDisabled) return;
    
    this.isChecked = !this.isChecked;
    this.isCheckedChange.emit(this.isChecked);
  }
}
