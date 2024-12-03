import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorsService {
  private error = new BehaviorSubject<string>('');
  error$ = this.error.asObservable();

  handleError(error: string): void {
    this.error.next(error);
    setTimeout(() => {
      this.error.next('');
    }, 5000);
  }
}
