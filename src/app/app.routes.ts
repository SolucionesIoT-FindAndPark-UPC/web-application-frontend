import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidationComponent } from './validation/validation.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'validation',
    component: ValidationComponent,
  },
  {
    path: '',
    redirectTo: 'validation',
    pathMatch: 'full',
  }
];
