import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SignInRequest } from '../models/sign-in-request-model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(): void {
    const request = new SignInRequest(this.username, this.password);
    this.authService.signIn(request).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard-page']);
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas';
        console.error(err);
      }
    });
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }
}
