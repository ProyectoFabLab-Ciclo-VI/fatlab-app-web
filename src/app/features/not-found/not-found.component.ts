import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
  standalone: true,
})
export class NotFoundComponent {
  constructor(
    private route: Router
  ) {}

  goBack() {
    const url = this.route.url.split('/').slice(0, -1).join('/');
    this.route.navigate([url])
  }
}
