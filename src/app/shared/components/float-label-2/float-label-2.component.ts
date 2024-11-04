import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-float-label-2',
  template: `
    <span class="float-label-2 relative block">
      <ng-content></ng-content>
    </span>
  `,
  styleUrl: './float-label-2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,

})
export class FloatLabel2Component {

}
