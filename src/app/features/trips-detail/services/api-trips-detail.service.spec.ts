/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ApiTripsDetailService } from './api-trips-detail.service';
import { HttpClient } from '@angular/common/http';

xdescribe('Service: ApiTripsDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiTripsDetailService, HttpClient],
    });
  });

  it('should ...', inject(
    [ApiTripsDetailService],
    (service: ApiTripsDetailService) => {
      expect(service).toBeTruthy();
    }
  ));
});
