import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SignUpRequest } from '../models/sign-up-request.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = '';
  email = '';
  username = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    const [firstName, ...rest] = this.name.trim().split(' ');
    const lastname = rest.join(' ') || 'Usuario';

    const request = new SignUpRequest(
      firstName,
      lastname,
      this.username,
      this.email,
      this.password,
      ['ROLE_ADMIN']
    );

    this.authService.signUp(request).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = 'Error al registrar usuario';
        console.error(err);
      }
    });
  }
}
