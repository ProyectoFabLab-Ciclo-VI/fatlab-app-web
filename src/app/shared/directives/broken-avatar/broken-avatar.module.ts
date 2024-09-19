import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokenAvatarDirective } from './broken-avatar.directive';

@NgModule({
  declarations: [
    BrokenAvatarDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BrokenAvatarDirective
  ]
})
export class BrokenAvatarModule { }
