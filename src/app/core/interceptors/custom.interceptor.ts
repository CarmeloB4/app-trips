import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, throwError } from 'rxjs';
import { LoaderService } from '../../shared/services/loader/loader.service';
import { inject } from '@angular/core';
import { ErrorsService } from '../../shared/services/errors/errors.service';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const stateService = inject(LoaderService);
  const errorService = inject(ErrorsService);

  stateService.handleLoading(true);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An error occurred';

      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = error.error.message;
      } else {
        // Server-side error
        errorMessage = error.error?.message || `Error Code: ${error.status}`;
      }

      errorService.handleError(errorMessage);
      return throwError(() => error);
    }),
    finalize(() => {
      stateService.handleLoading(false);
    }),
  );
};
