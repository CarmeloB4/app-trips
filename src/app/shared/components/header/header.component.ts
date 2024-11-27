import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'app-header',
  template: `<div class="navbar bg-primary">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl text-white">App Trips</a>
    </div>
    <div class="flex-none">
      <app-button
        [variant]="'accent'"
        [text]="'Viaggio del giorno'"
        (onClick)="navigateToDailyTrip()"
      ></app-button>
    </div>
  </div>`,
  imports: [ButtonComponent],
})
export class HeaderComponent {
  navigateToDailyTrip() {
    console.log('Navigate to daily trip');
  }
}
