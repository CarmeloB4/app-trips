import { Injectable } from '@angular/core';

export enum ScoreTier {
  AVERAGE = 'average',
  GOOD = 'good',
  AWESOME = 'awesome',
}

export interface ScoreResult {
  score: number;
  tier: ScoreTier;
}

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  calculateScore(
    rating: number,
    nrOfRatings: number,
    co2: number
  ): ScoreResult {
    const ratingScore = rating * 20; // Convert rating size 0-5 to 0-100
    const ratingsWeight = Math.min(nrOfRatings / 100, 1); // Calculation about nr of Ratings (max 100)
    const co2Score = Math.max(0, 100 - co2 / 2); // Score for co2 about minor impact

    const finalScore =
      ratingScore * 0.4 + // 40%
      ratingsWeight * 30 + // 30%
      co2Score * 0.3; // 30%
    // percentage of the final score

    const tier = this.getTier(finalScore);

    return {
      score: Math.round(finalScore),
      tier,
    };
  }

  private getTier(score: number): ScoreTier {
    if (score >= 80) return ScoreTier.AWESOME;
    if (score >= 60) return ScoreTier.GOOD;
    return ScoreTier.AVERAGE;
  }
}
