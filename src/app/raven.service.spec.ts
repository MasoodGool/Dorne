import { TestBed } from '@angular/core/testing';

import { RavenService } from './raven.service';

describe('RavenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RavenService = TestBed.get(RavenService);
    expect(service).toBeTruthy();
  });
});
