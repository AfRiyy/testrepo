import { TestBed } from '@angular/core/testing';

import { AdoptionServiceService } from './adoption-service.service';

describe('AdoptionServiceService', () => {
  let service: AdoptionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdoptionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
