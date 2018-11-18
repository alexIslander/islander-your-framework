import { ToDatePipe } from '../../../shared/utils/to-date.pipe';
import {DateFormatterUtil} from '../../../shared/utils/date-formatter.util';
import {inject, TestBed} from '@angular/core/testing';

describe('ToDatePipe', () => {
  let toDatePipe: ToDatePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ToDatePipe,
        DateFormatterUtil
      ]
    });
  });

  beforeEach(inject([ToDatePipe], (pipe: ToDatePipe) => {
    toDatePipe = pipe;
  }));

  it('should be initialized', () => {
    expect(toDatePipe).toBeTruthy();
  });

  it('should have transform method', () => {
    const text = '1990-01-01T01:01:01.000';
    const dateText = '01/01/1990';
    expect(toDatePipe.transform(text)).toEqual(dateText);
  });
});
