/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ApiTripsListService } from './api-trips-list.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

xdescribe('Service: ApiTripsList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });
  });

  it('should ...', inject(
    [ApiTripsListService],
    (service: ApiTripsListService) => {
      expect(service).toBeTruthy();
    }
  ));
});
