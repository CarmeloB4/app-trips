/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { TripsListService } from './trips-list.service';
import { TripFilters } from '../../../shared/models/trips.models';

describe('Service: TripsList', () => {
  let service: TripsListService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripsListService],
    });
    service = TestBed.inject(TripsListService);
    sessionStorage.clear();
  });

  it('should ...', inject([TripsListService], (service: TripsListService) => {
    expect(service).toBeTruthy();
  }));

  it('should set filters in sessionStorage', () => {
    const filters: TripFilters = {
      name: 'Rome',
      sortBy: 'price',
      sortOrder: true,
    };
    service.setFilters(filters);
    const storedFilters = sessionStorage.getItem('filters');
    expect(storedFilters).toBe(JSON.stringify(filters));
  });

  it('should get filters from sessionStorage', () => {
    const filters: TripFilters = {
      name: 'Rome',
      sortBy: 'price',
      sortOrder: true,
    };
    sessionStorage.setItem('filters', JSON.stringify(filters));
    const retrievedFilters = service.getFilters();
    expect(retrievedFilters).toEqual(filters);
  });

  it('should return an empty object if no filters are set', () => {
    const retrievedFilters = service.getFilters();
    expect(retrievedFilters).toEqual({});
  });

  it('should clear filters from sessionStorage', () => {
    const filters: TripFilters = {
      name: 'Rome',
      sortBy: 'price',
      sortOrder: true,
    };
    sessionStorage.setItem('filters', JSON.stringify(filters));
    service.clearFilters();
    const storedFilters = sessionStorage.getItem('filters');
    expect(storedFilters).toBeNull();
  });
});
