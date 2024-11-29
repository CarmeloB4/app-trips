import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { TripsListContainerComponent } from './features/trips-list/trips-list-container/trips-list-container.component';
import { TripsDetailContainerComponent } from './features/trips-detail/trips-detail-container/trips-detail-container.component';
import { TripsListCardComponent } from './features/trips-list/trips-list-card/trips-list-card.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    TripsDetailContainerComponent,
    TripsListContainerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-trips';
}
