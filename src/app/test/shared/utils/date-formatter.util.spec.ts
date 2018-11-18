import { TestBed, inject } from '@angular/core/testing';
import moment = require('moment');
import { DateFormatterUtil } from '../../../shared/utils/date-formatter.util';

describe('DateFormatterUtilService', () => {
  let dateFormatterUtil: DateFormatterUtil;
  const testDateString = '1990-10-21T11:11:11.000';
  const testDate = new Date(testDateString);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DateFormatterUtil
      ]
    });
  });

  beforeEach(inject([DateFormatterUtil], (util: DateFormatterUtil) => {
    dateFormatterUtil = util;
  }));

  it('should be initialized', () => {
    expect(dateFormatterUtil).toBeTruthy();
  });

  it('should have currentDate method', () => {
    expect(dateFormatterUtil.currentDate()).toEqual(dateFormatterUtil.formatDateToUTC(new Date(moment().startOf('day').toString())));
  });

  it('should have formatDateStringToString method', () => {
    expect(dateFormatterUtil.formatDateStringToString(null)).toEqual(null);
    expect(dateFormatterUtil.formatDateStringToString(testDateString)).toEqual('10/21/1990');
  });

  it('should have formatDateTimeStringToString method', () => {
    expect(dateFormatterUtil.formatDateTimeStringToString(testDateString)).toEqual('10/21/1990 11:11:11 AM');
  });

  it('should have formatDateTimeStringToString method', () => {
    expect(dateFormatterUtil.formatDateTimeStringToString(testDateString)).toEqual('10/21/1990 11:11:11 AM');
  });

  it('should have formatDateToString method', () => {
    expect(dateFormatterUtil.formatDateToString(testDate)).toEqual('10/21/1990');
  });

  it('should have formatDateToUTC', () => {
    expect(dateFormatterUtil.formatDateToUTC(null)).toEqual(null);
  });

  it('should have formatDateToToDate', () => {
    expect(dateFormatterUtil.formatDateToToDate(null)).toEqual(null);
    expect(dateFormatterUtil.formatDateToToDate(testDate)).toEqual(new Date(moment(testDate).add(-1, 's').add(1, 'd').toDate()));
  });

  it('should have formatToDateToDate', () => {
    expect(dateFormatterUtil.formatToDateToDate(null)).toEqual(null);
    expect(dateFormatterUtil.formatToDateToDate(testDate)).toEqual(new Date(moment(testDate).add(1, 's').add(-1, 'd').toDate()));
  });

  it('should have formatDateRangeForInput', () => {
    expect(dateFormatterUtil.formatDateRangeForInput(testDate, testDate)).toEqual('10/21/1990 - 10/20/1990');
  });

  it('should have formatFromDateToInputFromDate', () => {
    expect(dateFormatterUtil.formatFromDateToInputFromDate(null)).toEqual('');
    expect(dateFormatterUtil.formatFromDateToInputFromDate(testDate)).toEqual('10/21/1990');
  });

  it('should have formatToDateToInputToDate', () => {
    expect(dateFormatterUtil.formatToDateToInputToDate(null)).toEqual('');
    expect(dateFormatterUtil.formatToDateToInputToDate(testDate)).toEqual('10/20/1990');
  });

  it('should have formatToBackendDate', () => {
    expect(dateFormatterUtil.formatToBackendDate(null)).toEqual(null);
    let expectedDate = moment(testDate).utc().format(DateFormatterUtil.BACKEND_DATE_FORMAT);
    expectedDate = expectedDate.substr(0, expectedDate.indexOf('+'));
    expect(dateFormatterUtil.formatToBackendDate(testDate)).toEqual(expectedDate);
  });
});
