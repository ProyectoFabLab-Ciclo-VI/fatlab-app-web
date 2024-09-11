import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../../../core/index.service.trigger';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  standalone: true,
  imports: [FormsModule, RouterModule],
})
export class UserProfileComponent {
  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild('checkboxMenu') checkboxMenuElement!: ElementRef;
  isActivateSidebar: boolean = true;
  isActivateMenu: boolean = false;
  user = { 
    name: 'Ferxxo Fatlab',
  }

  constructor(
    private sidebarSrv: SidebarService
  ) { }

  @HostListener('window:resize', ['$event'])
  private onResize(event$: any) {
    if (event$.target.innerWidth < 768 && this.isActivateSidebar) {
      this.reactiveSidebar();
    }
  }

  @HostListener('window:click', ['$event'])
  handleClickOutside(event: Event) {
    let isNotElementOfMenu = !this.menuElement.nativeElement.contains(event.target) && !this.checkboxMenuElement.nativeElement.contains(event.target)
    if (isNotElementOfMenu && this.isActivateMenu) {
      this.isActivateMenu = false;
    }
  }

  public reactiveSidebar() {
    this.isActivateSidebar = !this.isActivateSidebar;
    this.sidebarSrv.activatedSidebar$.next(this.isActivateSidebar);
  }
}
