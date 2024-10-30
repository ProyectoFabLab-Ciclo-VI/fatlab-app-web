import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SidebarService } from '../../service/sidebar.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild('checkboxMenu') checkboxMenuElement!: ElementRef;
  isActiveSidebar: boolean = true;
  isActiveMenu: boolean = false;
  user = { 
    name: 'Administrador',
  }

  constructor(
    private sidebarSrv: SidebarService
  ) { }

  @HostListener('window:resize', ['$event'])
  private onResize(event$: any) {
    if (event$.target.innerWidth < 768 && this.isActiveSidebar) {
      this.reactiveSidebar();
    }
  }

  @HostListener('window:click', ['$event'])
  handleClickOutside(event: Event) {
    let isNotElementOfMenu = !this.menuElement.nativeElement.contains(event.target) && !this.checkboxMenuElement.nativeElement.contains(event.target)
    if (isNotElementOfMenu && this.isActiveMenu) {
      this.isActiveMenu = false;
    }
  }

  public reactiveSidebar() {
    this.isActiveSidebar = !this.isActiveSidebar;
    this.sidebarSrv.isActive$.next(this.isActiveSidebar);
  }
}
