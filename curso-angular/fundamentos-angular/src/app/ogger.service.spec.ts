import { TestBed } from '@angular/core/testing';

import { OggerService } from './ogger.service';

describe('OggerService', () => {
  let service: OggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
