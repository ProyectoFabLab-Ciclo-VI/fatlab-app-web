import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild('checkboxMenu') checkboxMenuElement!: ElementRef;
  isActiveMenu: boolean = false;
  user = { 
    name: 'Administrador',
  }

  constructor() { }

  @HostListener('window:click', ['$event'])
  handleClickOutside(event: Event) {
    let isNotElementOfMenu = !this.menuElement.nativeElement.contains(event.target) && !this.checkboxMenuElement.nativeElement.contains(event.target)
    if (isNotElementOfMenu && this.isActiveMenu) {
      this.isActiveMenu = false;
    }
  }
}
