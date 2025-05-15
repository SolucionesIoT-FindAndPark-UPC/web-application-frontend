import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Camera } from '../models/camera.model';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  base_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllCameras(): Observable<Camera[]> {
    return this.http.get<Camera[]>(this.base_URL + 'cameras')
      .pipe(
        catchError(this.handleError<Camera[]>('getAllCameras', []))
      );
  }

  getAllNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.base_URL + 'notifications')
      .pipe(
        catchError(this.handleError<Notification[]>('getAllNotifications', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
