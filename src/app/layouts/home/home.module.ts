import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { LoaderComponent } from '@shared/components/loader/loader.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoaderComponent,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    RouterModule,
  ]
})
export class HomeModule { }
