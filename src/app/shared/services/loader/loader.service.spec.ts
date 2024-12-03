/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { LoaderService } from './loader.service';

xdescribe('Service: Loader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService],
    });
  });

  it('should ...', inject([LoaderService], (service: LoaderService) => {
    expect(service).toBeTruthy();
  }));
});
