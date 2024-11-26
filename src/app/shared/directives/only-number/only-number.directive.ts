import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]',
  standalone: true,
})
export class OnlyNumberDirective {
  private regex: RegExp = new RegExp('^[0-9.]+$'); // Permitir solo números y coma
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'];

  constructor() { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;

    // Permitir teclas especiales
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    // Si se presiona la coma, verificar si ya existe una coma en el valor
    if (event.key === ',' && input.value.includes(',')) {
      event.preventDefault(); // Prevenir la coma si ya hay una
      return;
    }

    // Validar si el siguiente valor es válido (solo números o coma)
    const current: string = input.value;
    const next: string = current.concat(event.key);

    if (!String(next).match(this.regex)) {
      event.preventDefault(); // Prevenir si el valor no es válido
    }

    // No permitir que el número empiece con más de un 0
    if (next.startsWith('00')) {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event'])
  onInputChange(event: any): void {
    const input = event.target;

    // Si el valor tiene más de una coma, eliminar la segunda y las siguientes
    const value = input.value;
    const commaCount = (value.match(/,/g) || []).length;

    if (commaCount > 1) {
      input.value = value.substring(0, value.indexOf(',', value.indexOf(',') + 1));
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedInput = clipboardData.getData('text');

    // Verificar que el valor pegado sea solo números o coma
    if (!pastedInput.match(this.regex)) {
      event.preventDefault(); // Prevenir pegado no válido
    }

    // Asegurarse de que solo haya una coma
    const commaCount = (pastedInput.match(/,/g) || []).length;
    if (commaCount > 1) {
      event.preventDefault(); // Prevenir pegado con más de una coma
    }
  }
}
