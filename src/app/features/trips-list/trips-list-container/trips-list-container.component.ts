import { map, Observable } from 'rxjs';
import { ApiTripsListService } from './../services/api-trips-list.service';
import { Component, inject } from '@angular/core';
import { TripsListCardComponent } from '../trips-list-card/trips-list-card.component';
import { FiltersComponent } from '../../../shared/components/filters/filters.component';
import { FormBuilder } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Trip, TripFilters } from '../../../shared/models/trips.models';
import { TripsListService } from '../services/trips-list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trips-list-container',
  templateUrl: './trips-list-container.component.html',
  styleUrls: ['./trips-list-container.component.css'],
  imports: [
    TripsListCardComponent,
    FiltersComponent,
    CommonModule,
    AsyncPipe,
    RouterLink,
  ],
})
export class TripsListContainerComponent {
  trips$!: Observable<Trip[]>;
  private formBuilder = inject(FormBuilder);
  filtersForm = this.formBuilder.group({
    name: [''],
    sortBy: [''],
    sortOrder: [true],
  });
  constructor(
    private apiTripListService: ApiTripsListService,
    private tripListService: TripsListService
  ) {}

  ngOnInit() {
    this.getTrips(this.getFilters());
  }

  getPage() {
    return this.apiTripListService.page;
  }

  getMaximumPage() {
    return (
      this.getPage() === this.apiTripListService.totalPages ||
      this.apiTripListService.totalPages === 0
    );
  }

  setPage(page: number) {
    this.apiTripListService.page = page;
    const filters = this.tripListService.getFilters();
    this.getTrips(filters);
  }

  disabledPagination() {
    return this.getPage() === 1;
  }

  getTrips(filter?: Partial<TripFilters>) {
    this.trips$ = this.apiTripListService
      .getTrips(filter)
      .pipe(map((response) => response.items));
  }

  getFilters() {
    const filters = this.tripListService.getFilters();
    this.filtersForm.patchValue(filters);
    return filters;
  }

  filterTrips() {
    const filters: Partial<TripFilters> = this.filtersForm.value;
    this.tripListService.setFilters(filters);
    this.getTrips(filters);
  }

  clearFilters() {
    this.filtersForm.reset({ name: '', sortBy: '', sortOrder: true });
    this.tripListService.clearFilters();
    this.setPage(1);
    this.getTrips();
  }
}
