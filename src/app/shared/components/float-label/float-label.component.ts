import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-float-label',
  template: `
    <span class="float-label relative block">
      <ng-content></ng-content>
    </span>
  `,
  styleUrl: './float-label.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class FloatLabelComponent {

}
