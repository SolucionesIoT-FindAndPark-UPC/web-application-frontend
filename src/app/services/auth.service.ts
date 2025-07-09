import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { SignInRequest } from '../models/sign-in-request-model';
import { SignUpRequest } from '../models/sign-up-request.model';
import { AuthenticatedUser } from '../models/authenticated-user.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/api/v1/authentication`;

  constructor(private http: HttpClient) {}

  signIn(data: SignInRequest): Observable<AuthenticatedUser> {
    return this.http.post<AuthenticatedUser>(`${this.baseUrl}/sign-in`, data);
  }

  signUp(data: SignUpRequest): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/sign-up`, data);
  }
}