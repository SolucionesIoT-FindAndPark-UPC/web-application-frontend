import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <--- Importa el Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {} // <--- Inyecta el Router

  onSubmit(): void {
    // Redirige al componente Monitoring
    this.router.navigate(['/dashboard-page']);
  }

  onRegister(): void {
    // Redirige al componente Register
    this.router.navigate(['/register']);
  }
}
