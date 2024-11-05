import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { CommonModule } from '@angular/common';

type ButtonTheme = 'primary' | 'danger' | 'neutral' | 'success';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule],
})
export class CustomButtonComponent{
  @Input() color: ButtonTheme = 'primary';
  @Input() isButtonOutline: boolean = false;
  @Input() isCircularButton: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() buttonType: string = "button";
  @Input() sizeButton: ButtonSize = 'xs';
}
