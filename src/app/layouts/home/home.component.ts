import { Component } from '@angular/core';
import { SidebarService } from '../../core/index.service.trigger';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activateSidebar: boolean = true;
  sidebarSub: Subscription = new Subscription();

  constructor(
    private SiderbarSrv: SidebarService
  ) { }

  ngOnInit(): void {
    this.sidebarSub = this.SiderbarSrv.activatedSidebar$.subscribe(activate => this.activateSidebar = activate);
  }

  ngOnDestroy(): void {
    this.sidebarSub.unsubscribe();
  }
}
