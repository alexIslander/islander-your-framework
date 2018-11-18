import { ToDateTimePipe } from '../../../shared/utils/to-date-time.pipe';
import { inject, TestBed } from '@angular/core/testing';
import {DateFormatterUtil} from '../../../shared/utils/date-formatter.util';

describe('ToDateTimePipe', () => {
  let toDateTimePipe: ToDateTimePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ToDateTimePipe,
        DateFormatterUtil
      ]
    });
  });

  beforeEach(inject([ToDateTimePipe], (pipe: ToDateTimePipe) => {
    toDateTimePipe = pipe;
  }));

  it('should be initialized', () => {
    expect(toDateTimePipe).toBeTruthy();
  });

  it('should have transform method', () => {
    const text = '1990-01-01T01:01:01.000';
    const dateText = '01/01/1990 1:01:01 AM';
    expect(toDateTimePipe.transform(text)).toEqual(dateText);
  });
});
