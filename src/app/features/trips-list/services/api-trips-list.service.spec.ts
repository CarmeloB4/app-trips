/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiTripsListService } from './api-trips-list.service';

describe('Service: ApiTripsList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiTripsListService]
    });
  });

  it('should ...', inject([ApiTripsListService], (service: ApiTripsListService) => {
    expect(service).toBeTruthy();
  }));
});
