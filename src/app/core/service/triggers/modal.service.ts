import { Injectable, ComponentRef, EnvironmentInjector, ViewContainerRef } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { Modal } from '../../index.model.system';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalRef: ComponentRef<ModalComponent> | null = null;
  private modalCloseSubject = new Subject<any>();
  viewContianerRef!: ViewContainerRef;

  constructor(
    private environmentInjector: EnvironmentInjector
  ) { }

  public defineViewContainer(viewContainer: ViewContainerRef) {
    this.viewContianerRef = viewContainer;
  }

  public openModal(modalConfig: Modal): Observable<any> {
    this.closeExistingModal();
    
    if (!this.viewContianerRef) return throwError(() => new Error('ViewContainerRef no está definido'));
    
    this.modalRef = this.viewContianerRef.createComponent(ModalComponent, {
      environmentInjector: this.environmentInjector
    });

    const { component, title, alertMessage } = modalConfig;
    
    if (title) this.modalRef.instance.title = title;
    if (alertMessage !== undefined) this.modalRef.instance.alertMessage = alertMessage;

    this.modalRef.instance.closeEvent.subscribe((result: any) => this.handleClose(result));
    
    document.body.appendChild(this.modalRef.location.nativeElement);
    this.modalRef.instance.setComponent(component);

    return this.modalCloseSubject.asObservable();
  }

  public closeModal() {
    if (this.modalRef) {
      this.modalRef.instance.close();
    }
  }

  private handleClose(result?: any) {
    if (this.modalRef) {
      this.modalRef.destroy();
      this.modalRef = null;
      this.modalCloseSubject.next(result);
      this.modalCloseSubject.complete();
      this.modalCloseSubject = new Subject<any>();
    }
  }

  private closeExistingModal() {
    if (this.modalRef) {
      this.modalRef.destroy();
      this.modalRef = null;
      this.modalCloseSubject.next(true);
      this.modalCloseSubject.complete();
      this.modalCloseSubject = new Subject<any>();
    }
  }
}
