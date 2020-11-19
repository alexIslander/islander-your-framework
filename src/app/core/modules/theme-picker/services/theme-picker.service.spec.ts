import {TestBed} from '@angular/core/testing';

import {ThemePickerService} from './theme-picker.service';

describe('ColorPickerService', () => {
  let service: ThemePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
