import { TestBed, async, inject } from '@angular/core/testing';

import { StandardLoginGuard } from './standard-login.guard';

describe('StandardLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardLoginGuard]
    });
  });

  it('should ...', inject([StandardLoginGuard], (guard: StandardLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
