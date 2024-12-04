import { Component, Input, OnInit } from '@angular/core';
import {
  ScoreResult,
  ScoreService,
  ScoreTier,
} from '../../../core/services/score/score.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-score',
  imports: [TranslatePipe],
  template: `
    <div class="stats shadow" [class]="getTierClass()">
      <div class="stat">
        <div class="stat-title">{{ 'card.score' | translate }}</div>
        <div class="stat-value">{{ scoreStats.score }}</div>
        <div class="stat-desc capitalize">{{ scoreStats.tier }}</div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ScoreComponent implements OnInit {
  @Input() rating!: number;
  @Input() nrOfRatings!: number;
  @Input() co2!: number;

  scoreStats!: ScoreResult;

  constructor(private scoreService: ScoreService) {}

  ngOnInit() {
    this.scoreStats = this.scoreService.calculateScore(
      this.rating,
      this.nrOfRatings,
      this.co2,
    );
  }

  getTierClass(): string {
    const baseClasses = 'stats shadow';
    switch (this.scoreStats.tier) {
      case ScoreTier.AWESOME:
        return `${baseClasses} bg-success text-success-content`;
      case ScoreTier.GOOD:
        return `${baseClasses} bg-info text-info-content`;
      case ScoreTier.AVERAGE:
        return `${baseClasses} bg-warning text-warning-content`;
    }
  }
}
