import { Component, Input, ViewChild, ViewContainerRef, AfterViewInit, EventEmitter, Output, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements AfterViewInit {
  @Input() title: string = '';
  @Input() alertMessage: string = '';
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) dynamicComponent!: ViewContainerRef;
  @ViewChild('ModalContent') modalContent!: ElementRef;
  @Output() closeEvent = new EventEmitter<void>();

  private componentToLoad: any;

  constructor(
    private render: Renderer2,
  ) {}

  ngAfterViewInit() {
    if (this.componentToLoad) this.loadComponent(this.componentToLoad);
  }

  private loadComponent(component: any) {
    if (this.dynamicComponent) {
      this.dynamicComponent.clear();
      this.dynamicComponent.createComponent(component);
      const element = this.modalContent.nativeElement;
      if(element) {
        this.render.addClass(element, 'open')
      }
    } else {
      console.error('dynamicComponent ViewContainerRef is not initialized.');
    }
  }

  public close() {
    let isClose = this.alertMessage !== '' ? confirm(this.alertMessage) : true;
    if (isClose) {
      const element = this.modalContent.nativeElement;
      if(element) {
        this.render.removeClass(element, 'open')
        this.render.addClass(element, 'exit')
        setTimeout(() => {
          this.closeEvent.emit();
        }, 500);
      }
    }
  }

  public setComponent(component: any) {
    this.componentToLoad = component;
    if (this.dynamicComponent) this.loadComponent(component);
  }
}
