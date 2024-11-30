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
      title: 'Menu',
      items: [
        { name: 'Máquina', icon: 'icon/solid/computer-speaker.svg', modal: { component: AgregarMaquinaComponent, title: 'Agregar máquina' } },
        { name: 'Insumos', icon: 'icon/solid/laravel.svg', modal: { component: EdicionInsumoComponent, title: 'Agregar insumo' } },
        { name: 'Tarifario', icon: 'icon/solid/file-doc.svg', link: '/home/tarifario'},
        { name: 'Modelos Predefinido', icon: 'icon/solid/dropbox.svg', link: '/home/gestion-modelo' },
        { name: 'Pedidos', icon: 'icon/solid/book.svg', link: '/home/pedido' },
      ]
    },
    {
      title: 'Otros',
      items: [
        { name: 'Configuración', icon: 'icon/solid/cog.svg', link: '/home/configuracion' },
      ]
    }
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
