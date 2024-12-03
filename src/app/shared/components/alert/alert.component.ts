import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorsService } from '../../services/errors/errors.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-alert',
  imports: [AsyncPipe],
  template: ` @if (error$ | async; as error) {
    <div class="toast toast-top toast-start">
      <div class="alert alert-error">
        <span class="text-white">{{ error }}</span>
      </div>
    </div>
    }`,
})
export class AlertComponent {
  error$!: Observable<string>;
  constructor(private errorService: ErrorsService) {
    this.error$ = this.errorService.error$;
  }
}
