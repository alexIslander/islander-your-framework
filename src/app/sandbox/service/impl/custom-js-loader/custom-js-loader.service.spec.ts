import { TestBed } from '@angular/core/testing';

import { CustomJsLoaderService } from './custom-js-loader.service';

describe('CustomJsLoaderService', () => {
  let service: CustomJsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomJsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
