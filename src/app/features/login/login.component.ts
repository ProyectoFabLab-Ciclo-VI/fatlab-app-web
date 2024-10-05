import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router, RouterModule } from '@angular/router';
import { AuthUserService } from '../../core/index.service.http';
import { NotificationService } from '../../core/index.service.trigger';
import { CommonModule } from '@angular/common';
import { FloatLabelComponent } from '../../shared/components/float-label/float-label.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PasswordModule, InputTextModule, FloatLabelModule, RouterModule, FloatLabelComponent]
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
