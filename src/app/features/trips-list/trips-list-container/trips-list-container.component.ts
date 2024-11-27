import { Component, OnInit } from '@angular/core';
import { TripsListCardComponent } from '../trips-list-card/trips-list-card.component';

@Component({
  selector: 'app-trips-list-container',
  templateUrl: './trips-list-container.component.html',
  styleUrls: ['./trips-list-container.component.css'],
  imports: [TripsListCardComponent],
})
export class TripsListContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
