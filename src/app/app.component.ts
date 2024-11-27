import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { TripsListContainerComponent } from './features/trips-list/trips-list-container/trips-list-container.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TripsListContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-trips';
}
