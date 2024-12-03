/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiTripsDetailService } from './api-trips-detail.service';

describe('Service: ApiTripsDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiTripsDetailService]
    });
  });

  it('should ...', inject([ApiTripsDetailService], (service: ApiTripsDetailService) => {
    expect(service).toBeTruthy();
  }));
});
