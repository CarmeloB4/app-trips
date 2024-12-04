import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Trip } from '../../../shared/models/trips.models';
import { ApiTripsDetailService } from '../services/api-trips-detail.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { ScoreComponent } from '../../../shared/components/score/score.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-trips-detail-container',
  imports: [
    FontAwesomeModule,
    CommonModule,
    AsyncPipe,
    TranslatePipe,
    RouterLink,
    ScoreComponent,
  ],
  templateUrl: './trips-detail-container.component.html',
  styleUrls: ['./trips-detail-container.component.css'],
})
export class TripsDetailContainerComponent implements OnInit {
  trip$!: Observable<Trip>;
  faStar = faStar;
  constructor(
    private route: ActivatedRoute,
    private apiTripsDetail: ApiTripsDetailService,
  ) {}

  ngOnInit() {
    this.trip$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (id === 'tripOfTheDay') {
          return this.apiTripsDetail.getTripOfTheDay();
        } else {
          return this.apiTripsDetail.getTripDetail(id!);
        }
      }),
    );
  }
}
