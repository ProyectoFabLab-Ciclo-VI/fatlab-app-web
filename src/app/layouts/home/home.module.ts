import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { QuickAccessComponent } from './components/quick-access/quick-access.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DebtorListComponent } from './components/debtor-list/debtor-list.component';
import { AvatarComponent } from "../../shared/components/avatar/avatar.component";
import { MaintenanceListComponent } from './components/maintenance-list/maintenance-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    QuickAccessComponent,
    SidebarComponent,
    UserProfileComponent,
    DebtorListComponent,
    MaintenanceListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoaderComponent,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    RouterModule,
    AvatarComponent,
  ]
})
export class HomeModule { }
