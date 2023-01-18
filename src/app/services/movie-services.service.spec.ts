import { TestBed } from '@angular/core/testing';

import { MovieServicesService } from './movie-services.service';

describe('MovieServicesService', () => {
  let service: MovieServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
