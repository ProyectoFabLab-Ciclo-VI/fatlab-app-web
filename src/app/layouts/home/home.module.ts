import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarComponent,
    LoaderComponent,
  ]
})
export class HomeModule { }
