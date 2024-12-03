import { Injectable } from '@angular/core';
import { TripFilters } from '../../../shared/models/trips.models';

@Injectable({
  providedIn: 'root',
})
export class TripsListService {
  setFilters(filters: TripFilters): void {
    sessionStorage.setItem('filters', JSON.stringify(filters));
  }

  getFilters(): TripFilters {
    const filters = sessionStorage.getItem('filters');
    return filters ? JSON.parse(filters) : {};
  }

  clearFilters(): void {
    sessionStorage.removeItem('filters');
  }
  constructor() {}
}
