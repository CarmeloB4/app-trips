import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { ApiTripsDetailService } from './features/trips-detail/services/api-trips-detail.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-trips';
}
