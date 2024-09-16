import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from './service/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  isActiveSidebar: boolean = true;
  isActiveQuick: boolean = false;
  sidebarSub: Subscription = new Subscription();

  constructor(
    private SiderbarSrv: SidebarService,
  ) { }

  ngOnInit(): void {
    this.sidebarSub = this.SiderbarSrv.isActive$.subscribe(isActive => this.isActiveSidebar = isActive);
  }

  ngOnDestroy(): void {
    if(this.sidebarSub) this.sidebarSub.unsubscribe();
  }
}
