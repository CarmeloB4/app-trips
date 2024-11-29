import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Trip } from '../../../shared/models/trips.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiTripsListService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(this.apiUrl);
  }
}
