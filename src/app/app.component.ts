import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalService } from './core/index.service.trigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private modalSrv: ModalService,
  ) {}

  ngOnInit(): void {
    this.modalSrv.defineViewContainer(this.viewContainer);
  }
}
