import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  standalone: true,
})
export class LoaderComponent {
  @Input() scale: number = 150;
  sizeLoader = 'scale-[' + this.scale + '%]';
  @Input() cssClass: string = 'flex items-center justify-center  h-screen'
}
