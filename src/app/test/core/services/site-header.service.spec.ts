import { TestBed, inject } from '@angular/core/testing';

import { SiteHeaderService } from '../../../core/services/site-header.service';

describe('SiteHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteHeaderService]
    });
  });

  it('should be created', inject([SiteHeaderService], (service: SiteHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
