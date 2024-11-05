import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IconHelper } from '../../../core/index.helper';
import { IconName, IconType } from '../../../core/index.model.system'

type ButtonTheme = 'primary' | 'danger' | 'neutral' | 'success';
type Alignment = 'left' | 'right';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class CustomButtonComponent{
  @Input() text!: string;
  @Input() icon!: { name: IconName, type: IconType };
  @Input() iconAlignment: Alignment = 'left';
  @Input() color: ButtonTheme = 'primary';
  @Input() isButtonOutline: boolean = false;
  @Input() isCircularButton: boolean = false;

  iconHelper: IconHelper = new IconHelper();

  public getStyleAlignment() {
    return this.iconAlignment == 'left' ? 'order: -1;' : '';
  }
}
