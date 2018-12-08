import { TestBed, inject } from '@angular/core/testing';

import { WorkoutApiService } from './workout-api.service';

describe('WorkoutApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutApiService]
    });
  });

  it('should be created', inject([WorkoutApiService], (service: WorkoutApiService) => {
    expect(service).toBeTruthy();
  }));
});
