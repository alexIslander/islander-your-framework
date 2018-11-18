import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as moment from 'moment';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DateFormatterUtil {
  static BACKEND_DATE_FORMAT = environment.backendDateFormat;

  /**
   * Returns the current date
   */
  public currentDate(): Date {
    return this.formatDateToUTC(new Date(moment().startOf('day').toString()));
  }

  /**
   * Formats the given date based on the env variable
   * @param date - param date
   */
  public formatDateStringToString(date: string): string {
    return isNullOrUndefined(date) ? null : this.formatDateToString(new Date(date));
  }

  /**
   * Formats the given date to datetime based on the env variables
   * @param dateTime - param dateTime
   */
  public formatDateTimeStringToString(dateTime: string): string {
    return moment(dateTime).format((environment.dateFormat + ' ' + environment.timeFormat));
  }

  /**
   * Formats the given date based on the env variable
   * @param date -  param date
   */
  public formatDateToString(date: Date): string {
    return moment(date).format(environment.dateFormat);
  }

  /**
   * Formats the given date into UTC date
   * @param date - param date
   */
  public formatDateToUTC(date: Date): Date {
    if (isNullOrUndefined(date)) {
      return null;
    }

    const currentOffset = date.getTimezoneOffset() * -1;
    return new Date(moment(date).add(currentOffset, 'm').toDate());
  }

  /**
   * Formats the given date into a toDate (time ends with 23:59:59)
   * @param date - param date
   */
  public formatDateToToDate(date: Date): Date {
    if (isNullOrUndefined(date)) {
      return null;
    }

    return new Date(moment(date).add(-1, 's').add(1, 'd').toDate());
  }

  /**
   * Formats the given toDate into a date (time ends with 00:00:00)
   * @param date - param date
   */
  public formatToDateToDate(date: Date): Date {
    if (isNullOrUndefined(date)) {
      return null;
    }

    return new Date(moment(date).add(1, 's').add(-1, 'd').toDate());
  }

  /**
   * Formats a date range into a displayable string for inputs
   * @param fromDate - param fromDate
   * @param toDate - param toDate
   * @returns result
   */
  public formatDateRangeForInput(fromDate: any, toDate: any): string {
    return this.formatFromDateToInputFromDate(fromDate) + ' - ' + this.formatToDateToInputToDate(toDate);
  }

  /**
   * Formats a FromDate into a displayable date for inputs
   * @param date - param date
   * @returns result
   */
  public formatFromDateToInputFromDate(date: any): string {
    return isNullOrUndefined(date) ? '' : moment(date).format(environment.dateFormat);
  }

  /**
   * Formats a ToDate into a displayable date for inputs
   * @param date - param date
   * @returns result
   */
  public formatToDateToInputToDate(date: any): string {
    // MAT-HOTFIX MOMENT-HOTFIX
    // Because the toDate time section is 23:59:59, it is automatically converted to the next day 00:00:00 state
    // It needs to be reverted during display
    return isNullOrUndefined(date) ? '' : moment(date).add(-1, 'd').format(environment.dateFormat);
  }

  /**
   * Formats the date to a parseable date for the backend
   * @param date  - param date
   * @returns result
   */
  public formatToBackendDate(date: any): string {
    if (date) {
      let formattedDate = moment(date).utc().format(DateFormatterUtil.BACKEND_DATE_FORMAT);
      const timezoneAddonIndex = formattedDate.indexOf('+');
      if (timezoneAddonIndex >= 0) {
        formattedDate = formattedDate.substr(0, formattedDate.indexOf('+'));
      }
      return formattedDate;
    }
    return null;
  }
}

