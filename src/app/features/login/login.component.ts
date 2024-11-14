import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthUserService } from '../../core/index.service.http';
import { NotificationService } from '../../core/index.service.trigger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class LoginComponent {
  user: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private route: Router,
    private authSrv: AuthUserService,
    private notificationSrv: NotificationService
  ) {}

  onSubmit() {
    const { username, password } = this.user.value;
    this.authSrv.login(username, password).subscribe({
      next: isValid => {
        if(isValid) {
          this.route.navigate(['/home']);
          const name = username.split('@')[0];
          this.notificationSrv.addNotification('success',`Bienvenido ${name}`);
          return;
        }
        this.notificationSrv.addNotification('error', 'Lo siento, no te encontramos');
      },
      error: () => {
        this.notificationSrv.addNotification('error', 'Upps, ocurrió un error del servidor')
      }
    });
  }
}
