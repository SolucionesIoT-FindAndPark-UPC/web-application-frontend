import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, catchError, of } from 'rxjs';
import { VideoRecord } from '../models/video-record.model';

@Injectable({
  providedIn: 'root'
})
export class CameraFeedService {
  private baseUrl = `${environment.apiUrl}/api/v1/camera-feed`;

  constructor(private http: HttpClient) {}

  getVideoRecordsByParkingLot(parkingLotId: number): Observable<VideoRecord[]> {
    return this.http.get<VideoRecord[]>(`${this.baseUrl}/parking-lot/${parkingLotId}`).pipe(
      catchError(error => {
        console.error('Error al obtener videos de cámaras:', error);
        return of([]);
      })
    );
  }
}