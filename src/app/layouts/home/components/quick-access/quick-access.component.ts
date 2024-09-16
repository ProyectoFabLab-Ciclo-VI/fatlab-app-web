import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrl: './quick-access.component.css'
})
export class QuickAccessComponent {
  isActiveQuick: boolean = true;
  quickAccess = [
    { name: 'Agregar pedido', src: 'icon/sidebar/icon-pedido.webp', ctrl: 'ctrl + p' },
    { name: 'Agregar prestamo', src: 'icon/sidebar/icon-prestamo.webp', ctrl: 'ctrl + d' },
    { name: 'Agregar insumo', src: 'icon/sidebar/icon-insumo.webp', ctrl: 'ctrl + i' },
    { name: 'Agregar maquina', src: 'icon/sidebar/icon-maquina.webp', ctrl: 'ctrl + m' },
    { name: 'Agregar otro', src: 'icon/sidebar/icon-otro.webp', ctrl: 'ctrl + o' },
  ]

  @HostListener('window:resize', ['$event'])
  private onResize(event$: any) {
    if (event$.target.innerWidth < 800) {
      this.isActiveQuick = false;
      return;
    }
    this.isActiveQuick = true;
  }
}
