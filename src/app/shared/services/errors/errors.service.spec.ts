/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ErrorsService } from './errors.service';

xdescribe('Service: Errors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorsService],
    });
  });

  it('should ...', inject([ErrorsService], (service: ErrorsService) => {
    expect(service).toBeTruthy();
  }));
});
