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
    // Normalizza i valori
    const ratingScore = rating * 20; // Converti rating da 0-5 a 0-100
    const ratingsWeight = Math.min(nrOfRatings / 100, 1); // Peso basato sul numero di ratings (max 100)
    const co2Score = Math.max(0, 100 - co2 / 2); // Punteggio inverso per CO2 (minore è meglio)

    // Calcola lo score finale
    const finalScore =
      ratingScore * 0.4 + // 40% peso per il rating
      ratingsWeight * 30 + // 30% peso per numero di ratings
      co2Score * 0.3; // 30% peso per CO2

    // Determina il tier
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
