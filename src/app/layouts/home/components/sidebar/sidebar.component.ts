import { Component, Type } from '@angular/core';

import { AgregarMaquinaComponent } from '@features/gestion-maquina/agregar-maquina/agregar-maquina.component';
import { EdicionInsumoComponent } from '@features/gestion-insumo/edicion-insumo/edicion-insumo.component';

import { ModalService } from '@core/index.service.trigger';
import { Modal } from '@core/index.model.system';

interface Page {
  name: string;
  icon: string;
  link?: string;
  modal?: {
    component: Type<any>,
    title: string;
  }
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
        { name: 'Máquina', icon: 'icon/sidebar/icon-maquina.webp', modal: { component: AgregarMaquinaComponent, title: 'Agregar máquina' } },
        { name: 'Insumos', icon: 'icon/sidebar/icon-insumo.webp', modal: { component: EdicionInsumoComponent, title: 'Agregar insumo' } },
        { name: 'Configuración', icon: 'icon/sidebar/icon-pedido.webp', link: '/home/configuracion' },
        { name: 'Tarifario', icon: 'icon/sidebar/icon-prestamo.webp', link: '/home/tarifario'},
        { name: 'Modelos', icon: 'icon/sidebar/icon-pedido.webp', link: '/home/gestion-modelo' },
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
    const { modal } = page;
    
    if(!modal) return;
    
    const modalConfig: Modal = {
      title: modal.title,
      component: modal.component,
    }
    this.modalSrv.openModal(modalConfig);
  }
}
