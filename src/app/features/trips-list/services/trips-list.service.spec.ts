/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TripsListService } from './trips-list.service';

describe('Service: TripsList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripsListService]
    });
  });

  it('should ...', inject([TripsListService], (service: TripsListService) => {
    expect(service).toBeTruthy();
  }));
});
