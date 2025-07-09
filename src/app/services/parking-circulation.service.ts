import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProcessPlateRequest } from '../models/process-plate-request.model';
import { ProcessPlateResponse } from '../models/process-plate-response.model';
import { ParkingRecord } from '../models/parking-record.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingCirculationService {
  private baseUrl = `${environment.apiUrl}/api/v1/parking-circulation/parking`;

  constructor(private http: HttpClient) {}

  processPlate(data: ProcessPlateRequest): Observable<ProcessPlateResponse> {
    return this.http.post<ProcessPlateResponse>(`${this.baseUrl}/process-plate`, data);
  }

  getHistory(): Observable<ParkingRecord[]> {
    return this.http.get<ParkingRecord[]>(`${this.baseUrl}/history`);
  }
}
