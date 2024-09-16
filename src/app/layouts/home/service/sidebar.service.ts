import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isActive$: EventEmitter<boolean> = new EventEmitter<boolean>();
}
