import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  groups = [
    {
      title: 'Principal',
      items: [
        { name: 'Dashboard', icon: 'icon/sidebar/icon-dashboard.webp', link: './dashboard' },
        { name: 'Pedidos', icon: 'icon/sidebar/icon-pedido.webp', link: './pedido' },
        { name: 'Prestamos', icon: 'icon/sidebar/icon-prestamo.webp', link: './prestamo' },
      ]
    },
    {
      title: 'Inventario',
      items: [
        { name: 'Gestión insumos', icon: 'icon/sidebar/icon-insumo.webp', link: './gestion-insumo' },
        { name: 'Gestión maquinas', icon: 'icon/sidebar/icon-maquina.webp', link: './gestion-maquina' },
        { name: 'Gestión otros', icon: 'icon/sidebar/icon-otro.webp', link: './gestion-otro' },
      ]
    }
  ]
}
