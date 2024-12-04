import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader/loader.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [AsyncPipe],
  template: ` @if (loading$ | async) {
    <div
      class="fixed left-0 top-0 w-screen h-screen flex items-center justify-center bg-slate-100"
    >
      <span class="loading loading-ring loading-lg"></span>
    </div>
  }`,
})
export class LoaderComponent {
  loading$!: Observable<boolean>;
  constructor(private loaderService: LoaderService) {
    this.loading$ = this.loaderService.loading$;
  }
}
