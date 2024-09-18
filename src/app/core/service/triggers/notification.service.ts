import { EventEmitter, Injectable } from '@angular/core';
import { NotificationStatus, Notification } from '../../index.model.system';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notification[] = [];
  private notifications$: EventEmitter<Notification[]> = new EventEmitter();

  public addNotification(status: NotificationStatus, message: string) {
    let notification = new Notification(status, message);
    
    this.notifications.push(notification);
    this.notifications$.emit(this.notifications);
  }

  public getNotifications(): EventEmitter<Notification[]> {
    return this.notifications$;
  }
}
