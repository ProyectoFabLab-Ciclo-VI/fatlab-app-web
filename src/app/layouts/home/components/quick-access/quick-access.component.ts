import { Component, HostListener, Type, ViewContainerRef } from '@angular/core';

import { ModalService } from '../../../../core/index.service.trigger';
import { Modal } from '../../../../core/index.model.system';
import { NotFoundComponent } from '../../../../features/not-found/not-found.component';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrl: './quick-access.component.css'
})
export class QuickAccessComponent {
  isActiveQuick: boolean = true;
  quickAccesses = [
    { 
      name: 'Agregar pedido',
      src: 'icon/sidebar/icon-pedido.webp',
      ctrl: 'ctrl + p',
      component: NotFoundComponent
    },
    { 
      name: 'Agregar prestamo',
      src: 'icon/sidebar/icon-prestamo.webp',
      ctrl: 'ctrl + d',
      component: NotFoundComponent
    },
    { 
      name: 'Agregar insumo',
      src: 'icon/sidebar/icon-insumo.webp',
      ctrl: 'ctrl + i',
      component: NotFoundComponent
    },
    { 
      name: 'Agregar maquina',
      src: 'icon/sidebar/icon-maquina.webp',
      ctrl: 'ctrl + m',
      component: NotFoundComponent
    },
    { 
      name: 'Agregar otro',
      src: 'icon/sidebar/icon-otro.webp',
      ctrl: 'ctrl + o',
      component: NotFoundComponent
    },
  ]

  constructor(
    private viewContainerRef: ViewContainerRef,
    private modalSrv: ModalService
  ){}

  @HostListener('window:resize', ['$event'])
  private onResize(event$: any) {
    if (event$.target.innerWidth < 800) {
      this.isActiveQuick = false;
      return;
    }
    this.isActiveQuick = true;
  }

  @HostListener('window:keydown', ['$event'])
  private handleKeyDown(event: KeyboardEvent) {
    this.quickAccesses.map(quickAccess => {
      const { name, ctrl, component } = quickAccess;
      let key = ctrl.slice(-1);
      this.keyboardReview(event, key, component, name);
    });
  }

  private keyboardReview(event: KeyboardEvent, key: string, component: Type<any>, title: string) {
    if (event.ctrlKey && event.key === key) {
      event.preventDefault();
      this.executeModal(component, title);
    }
  }

  private executeModal(component: Type<any>, title: string) {
    let modalConfig: Modal = {
      component: component,
      alertMessage: '¿Estas seguro que quieres descartar tu avanze?',
      title: title,
    }
    this.modalSrv.openModal(this.viewContainerRef, modalConfig)
  }
}
