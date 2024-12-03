/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ScoreResult, ScoreService, ScoreTier } from './score.service';

describe('Service: Score', () => {
  let service: ScoreService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreService],
    });
    service = TestBed.inject(ScoreService);
  });

  it('should ...', inject([ScoreService], (service: ScoreService) => {
    expect(service).toBeTruthy();
  }));

  it('should calculate score correctly', () => {
    const rating = 4.5;
    const nrOfRatings = 42;
    const co2 = 19;
    const expectedScore = 76;
    const expectedTier = ScoreTier.GOOD;

    const result: ScoreResult = service.calculateScore(
      rating,
      nrOfRatings,
      co2
    );
    expect(result.score).toBe(expectedScore);
    expect(result.tier).toBe(expectedTier);
  });

  it('should return AWESOME tier for high score', () => {
    const rating = 5;
    const nrOfRatings = 100;
    const co2 = 0;
    const expectedScore = 100;
    const expectedTier = ScoreTier.AWESOME;

    const result: ScoreResult = service.calculateScore(
      rating,
      nrOfRatings,
      co2
    );
    expect(result.score).toBe(expectedScore);
    expect(result.tier).toBe(expectedTier);
  });

  it('should return AVERAGE tier for low score', () => {
    const rating = 2;
    const nrOfRatings = 10;
    const co2 = 100;
    const expectedScore = 34;
    const expectedTier = ScoreTier.AVERAGE;

    const result: ScoreResult = service.calculateScore(
      rating,
      nrOfRatings,
      co2
    );
    expect(result.score).toBe(expectedScore);
    expect(result.tier).toBe(expectedTier);
  });

  it('should return correct tier based on score', () => {
    expect(service['getTier'](85)).toBe(ScoreTier.AWESOME);
    expect(service['getTier'](65)).toBe(ScoreTier.GOOD);
    expect(service['getTier'](55)).toBe(ScoreTier.AVERAGE);
  });
});
