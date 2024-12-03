import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Trip } from '../../../shared/models/trips.models';

@Injectable({
  providedIn: 'root',
})
export class ApiTripsDetailService {
  private apiUrl = environment.apiUrl;
  private readonly keyTripOfTheDay = 'tripOfTheDay';
  private readonly keyTripOfTheDayDate = 'tripOfTheDayDate';

  constructor(private httpClient: HttpClient) {}

  setTripOfTheDay(trip: Trip, day: string): void {
    localStorage.setItem(this.keyTripOfTheDay, JSON.stringify(trip));
    localStorage.setItem(this.keyTripOfTheDayDate, day);
  }

  getTripDetail(id: string): Observable<Trip> {
    return this.httpClient.get<Trip>(`${this.apiUrl}/${id}`);
  }

  getTripOfTheDay(): Observable<Trip> {
    const today = new Date().toDateString();
    const lastSavedTrip = localStorage.getItem(this.keyTripOfTheDayDate);
    const trip = localStorage.getItem(this.keyTripOfTheDay);
    if (today === lastSavedTrip && trip) {
      return of(JSON.parse(trip!));
    }
    return this.httpClient
      .get<Trip>(`${this.apiUrl}/random/trip-of-the-day`)
      .pipe(
        tap((trip) => {
          this.setTripOfTheDay(trip, today);
        })
      );
  }
}
