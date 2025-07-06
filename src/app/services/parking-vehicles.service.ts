import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Vehicle } from '../models/vehicle.model';
import { RegisterVehicleRequest } from '../models/register-vehicle-request.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrl = `${environment.apiUrl}/api/v1/parking-circulation/vehicles`;

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.baseUrl);
  }

  registerVehicle(request: RegisterVehicleRequest): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.baseUrl, request);
  }
}