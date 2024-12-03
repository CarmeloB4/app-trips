import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { TripFilters, TripResponse } from '../../../shared/models/trips.models';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiTripsListService {
  private apiUrl = environment.apiUrl;
  page = 1;
  limit = 10;
  totalPages!: number;
  constructor(private httpClient: HttpClient) {}

  getTrips(filter?: Partial<TripFilters>): Observable<TripResponse> {
    const params = new HttpParams()
      .set('page', this.page)
      .set('sortBy', filter && filter.sortBy ? filter.sortBy : '')
      .set('sortOrder', filter && filter.sortOrder ? 'ASC' : 'DESC')
      .set('titleFilter', filter && filter.name ? filter.name : '');
    return this.httpClient.get<TripResponse>(this.apiUrl, { params }).pipe(
      tap(response => {
        this.totalPages = Math.ceil(response.total / response.limit);
      }),
    );
  }
}
