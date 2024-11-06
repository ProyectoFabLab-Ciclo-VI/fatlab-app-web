import { Component, Type } from '@angular/core';

import { AgregarMaquinaComponent } from '../../../../features/gestion-maquina/agregar-maquina/agregar-maquina.component';

import { ModalService } from '../../../../core/index.service.trigger';
import { Modal } from '../../../../core/index.model.system';

interface Page {
  name: string;
  icon: string;
  link?: string;
  component?: Type<any> // para el modal
}

interface GroupPage {
  title: string;
  items: Page[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  groups: GroupPage[] = [
    {
      title: 'Inventario',
      items: [
        { name: 'Máquina', icon: 'icon/sidebar/icon-maquina.webp', component: AgregarMaquinaComponent },
        { name: 'Insumos', icon: 'icon/sidebar/icon-insumo.webp', link: '/home/gestion-insumo' },
        // { name: 'Materiales Especiales', icon: 'icon/sidebar/icon-dashboard.webp' },
        { name: 'Configuración', icon: 'icon/sidebar/icon-pedido.webp' },
        { name: 'Tarifario', icon: 'icon/sidebar/icon-prestamo.webp', link: '/home/tarifario'},
      ]
    },
    // {
    //   title: 'Pedidos',
    //   items: [
    //     { name: 'Usuario', icon: 'icon/sidebar/icon-pedido.webp' },
    //     { name: 'Préstamo', icon: 'icon/sidebar/icon-pedido.webp' },
    //     { name: 'Pagos', icon: 'icon/sidebar/icon-otro.webp' },
    //   ]
    // }
  ]

  constructor(
    private modalSrv: ModalService,
  ) {}

  public activePerformance(page: Page) {
    const { component } = page;
    
    if(!component) return;
    
    const modalConfig: Modal = {
      title: 'Agregar máquina',
      component: component,
    }
    this.modalSrv.openModal(modalConfig);
  }
}
