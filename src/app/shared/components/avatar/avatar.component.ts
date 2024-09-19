import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BrokenAvatarModule } from '../../directives/broken-avatar/broken-avatar.module';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule,BrokenAvatarModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent implements OnInit {
  @Input() urlImage: string = '';
  @Input() letter: string = 'F';
  @Input() isDark: boolean = false;

  ngOnInit(): void {
    if(this.letter.length > 1) {
      this.letter = this.letter[0];
    }
  }
}
