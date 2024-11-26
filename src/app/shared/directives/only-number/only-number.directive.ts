import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]',
  standalone: true,
})
export class OnlyNumberDirective {
  private regex: RegExp = new RegExp('^[0-9]+$');
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'];

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return; // Permite teclas especiales
    }
    const current: string = (event.target as HTMLInputElement).value;
    const next: string = current.concat(event.key);
    if (!String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedInput = clipboardData.getData('text');
    if (!pastedInput.match(this.regex)) {
      event.preventDefault();
    }
  }
}
