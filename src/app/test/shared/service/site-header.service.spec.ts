import { TestBed, inject } from '@angular/core/testing';

import { SiteHeaderService } from '../../../shared/service/site-header.service';

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
