import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../../shared/models/trips.models';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-trips-list-card',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './trips-list-card.component.html',
  styleUrls: ['./trips-list-card.component.css'],
})
export class TripsListCardComponent implements OnInit {
  @Input() trip!: Trip;

  constructor() {}

  ngOnInit() {}
}
