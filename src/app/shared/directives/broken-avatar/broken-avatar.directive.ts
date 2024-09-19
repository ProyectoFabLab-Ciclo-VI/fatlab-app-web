import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBrokenAvatar]'
})
export class BrokenAvatarDirective {
  @Input() urlImageCustom!: string;

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener("error")
  loadAvatar() {
    const $img = this.elementRef.nativeElement;
    const customUrl = this.urlImageCustom ?? '/image/broken-avatar.webp';
    $img.src = customUrl;
  }

}
