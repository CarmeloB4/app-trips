import { Component } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `<div class="navbar bg-primary">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl text-white" routerLink="/">App Trips</a>
    </div>
    <div class="flex-none">
      <app-button
        [variant]="'accent'"
        [text]="'header.tripOfTheDay'"
        routerLink="detail/tripOfTheDay"
      ></app-button>
    </div>
  </div>`,
  imports: [ButtonComponent, RouterLink],
})
export class HeaderComponent {}
