import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import * as moment from 'moment';
import * as momenttz from 'moment-timezone';
import {CommonFunctionService} from '../service/common-function.service';
import DurationConstructor = moment.unitOfTime.DurationConstructor;

@Injectable()
export class DateFormatterUtil {

  static BACKEND_DATE_FORMAT = environment.backendDateFormat;
  static DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSS';
  public DATE_FORMAT = environment.dateFormat;
  DEAFULT_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
  ONE_HOUR =  3600;
  ONE_SECOND_IN_MILISECOND = 1000;
  MINUTES = 'm' as DurationConstructor;
  SECONDS = 's' as DurationConstructor;
  DAY_UNIT = 'd' as DurationConstructor;
  DAY_UNIT_OF_TIME = 'day' as DurationConstructor;
  COORDINATED_UNIVERSAL_TIME = 'UTC';
  GREENWICH_MEAN_TIME = ' GMT';
  PLUS = '+';

  // ------------------------ SHARED METHODS START------------------------

  /**
   * Returns the current date
   */
  public currentDate(): Date {
    return this.formatDateToUTC(moment().startOf(this.DAY_UNIT_OF_TIME).toDate());
  }

  /**
   * Formats the given toDate into a date (time ends with 00:00:00)
   * @param date
   */
  public formatToDateToDate(date: Date): Date {
    if (CommonFunctionService.isNullOrUndefined(date)) {
      return null;
    }

    return new Date(moment(date).add(1, this.SECONDS).add(-1, this.DAY_UNIT).toDate());
  }

  /**
   * Formats the given date into UTC date
   * @param date
   */
  public formatDateToUTC(date: Date): Date {
    if (CommonFunctionService.isNullOrUndefined(date)) {
      return null;
    }

    const currentOffset = date.getTimezoneOffset() * -1;
    return new Date(moment(date).add(currentOffset, this.MINUTES).toDate());
  }

  /**
   * Formats the given date based on the env variable
   * @param date
   */
  public formatDateStringToString(date: string): string {
    return CommonFunctionService.isNullOrUndefined(date) ? null : this.formatDateToString(new Date(date));
  }

  /**
   * Formats the given date into a toDate (time ends with 23:59:59)
   * @param date
   */
  public formatDateToToDate(date: Date): Date {
    if (CommonFunctionService.isNullOrUndefined(date)) {
      return null;
    }
    return new Date(moment(date).add(-1, this.SECONDS).add(1, this.DAY_UNIT).toDate());
  }

  /**
   * Formats a FromDate into a displayable date for inputs
   * @param date
   * @returns {string}
   */
  public formatFromDateToInputFromDate(date: any): string {
    return CommonFunctionService.isNullOrUndefined(date) ? '' : moment(date).format(environment.dateFormat);
  }

  /**
   * Formats a ToDate into a displayable date for inputs
   * @param date
   * @returns {string}
   */
  public formatToDateToInputToDate(date: any): string {
    // MAT-HOTFIX MOMENT-HOTFIX
    // Because the toDate time section is 23:59:59, it is automatically converted to the next day 00:00:00 state
    // It needs to be reverted during display
    return CommonFunctionService.isNullOrUndefined(date) ? '' : moment(date).add(-1, this.DAY_UNIT).format(environment.dateFormat);
  }

  // ------------------------ LEDGER SETTINGS METHODS START ------------------------

  /**
   * Returns the current date
   */
  public currentDateTime(timeZone = this.COORDINATED_UNIVERSAL_TIME): string {
    const utcMomentWithoutTimezone = momenttz().tz(timeZone).utc();
    return utcMomentWithoutTimezone.add(momenttz().tz(timeZone).utcOffset(), this.MINUTES).format(this.DATE_FORMAT);
  }

  /**
   * This method restores the time information to midnight and applies dateTime format.
   * @param {string} date - input date string
   * @returns {string} - formatted midnight date string
   */
  public formatDateStringToMidnightDateTimeString(date: string) {
    return momenttz(date).startOf(this.DAY_UNIT_OF_TIME).format(DateFormatterUtil.DATE_TIME_FORMAT);
  }

  /**
   * This method receives a date string and increases with one day
   * @param {string} date
   * @returns {string}
   */
  public modifyByDays(date: string, dayDelta = 1) {
    return momenttz(date).startOf(this.DAY_UNIT_OF_TIME).add(dayDelta, this.DAY_UNIT_OF_TIME).format(DateFormatterUtil.DATE_TIME_FORMAT);
  }

  /**
   * Converts the given utc date to local date (display)
   * @param date
   */
  public formatDateTimeString(date: string, displayFormat = false): string {
    if (displayFormat) {
      return momenttz(date).format(environment.dateFormat + ' ' + environment.timeFormat);
    }
    return momenttz(date).format(DateFormatterUtil.DATE_TIME_FORMAT);
  }

  /**
   * Formats the given date based on the env variable
   * @param date
   */
  public formatDateToString(date: Date): string {
    return moment(date).format(environment.dateFormat);
  }

  // ------------------------ ARE STARTS ------------------------

  /**
   * Formats the given date to datetime based on the env variables
   * @param dateTime
   */
  public formatDateTimeStringToString(dateTime: string): string {
    return moment(dateTime).format((environment.dateFormat + ' ' + environment.timeFormat));
  }

  /**
   * Formats a date range into a displayable string for inputs
   * @param fromDate
   * @param toDate
   * @returns {string}
   */
  public formatDateRangeForInput(fromDate: any, toDate: any): string {
    return this.formatFromDateToInputFromDate(fromDate) + ' - ' + this.formatToDateToInputToDate(toDate);
  }

  // ------------------------ ACCOUNT SETTINGS STARTS ------------------------

  /**
   * Formats the date to a parseable date for the backend
   * @param date
   * @returns {string}
   */
  public formatToBackendUTCDate(date: any): string {
    if (date) {
      let formattedDate = moment(date).utc().format(DateFormatterUtil.BACKEND_DATE_FORMAT);
      const timezoneAddonIndex = formattedDate.indexOf(this.PLUS);
      if (timezoneAddonIndex >= 0) {
        formattedDate = formattedDate.substr(0, formattedDate.indexOf(this.PLUS));
      }
      return formattedDate;
    }
    return null;
  }

  /**
   * Formats the date to backend date format
   * @param date
   * @returns {string}
   */
  public formatToBackendDate(date: any): string {
    if (date) {
      let formattedDate = momenttz(date).startOf(this.DAY_UNIT_OF_TIME).format(DateFormatterUtil.BACKEND_DATE_FORMAT);
      const timezoneAddonIndex = formattedDate.indexOf(this.PLUS);
      if (timezoneAddonIndex >= 0) {
        formattedDate = formattedDate.substr(0, formattedDate.indexOf(this.PLUS));
      }
      return formattedDate;
    }
    return null;
  }

  // ------------------------ UNUSED / USEFUL COMMON OPERATIONS START. ------------------------

   /**
   * Get back in time information without extra calculations
   * @param dateFormat 'YYYY-MM-DD HH:mm:ss'
   * @param futureOrPast 'add' , 'subtract'
   * @param type 'type' , 'years', 'days' , 'months'
   * @param type '5'
   * timeDifference(8, 'years', 'add');
   */

  timeDifference(amount, type , futureOrPast,  dateFormat?) {
    return  momenttz()[futureOrPast](amount, type).format(dateFormat ? dateFormat : this.DEAFULT_DATE_FORMAT);
  }

  /**
   * Get current time and date for all timezone in the world (425 time zones)
   * available list here https://timezonedb.com/time-zones?
   * @param numOffset '+2.0'
   * @param indication 'Is optional and up to the us if we want to show correspondent Country name / Time Zone / Country code '
   * @returns {string}
   */
  getLocalTimeAndDateByTimezone(gmtOffsetNum, indication?) {
    const dateTimeUtc = new Date(Date.now());
    const dateTimeLocal = new Date(dateTimeUtc.getTime() + gmtOffsetNum * this.ONE_HOUR * this.ONE_SECOND_IN_MILISECOND);
    return dateTimeLocal.toUTCString().split(this.GREENWICH_MEAN_TIME)[0];
  }

   /**
   * Returns the current date without time
   */
  public currentDateNoTime(timeZone: string = this.COORDINATED_UNIVERSAL_TIME): string {
    const utcMomentWithoutTimezone = momenttz().utc();
    const utcMomentWithTimezone = utcMomentWithoutTimezone.add(momenttz().tz(timeZone).utcOffset(), this.MINUTES).format(DateFormatterUtil.DATE_TIME_FORMAT);
    return momenttz.tz(utcMomentWithTimezone, timeZone).startOf(this.DAY_UNIT_OF_TIME).format();
  }

  public formatDateStringToDatePickerFormat(date: string) {
    return momenttz(date).startOf(this.DAY_UNIT_OF_TIME).format(this.DATE_FORMAT);
  }

  public getDateTimeInformation(): string {
    return moment().format(environment.timeFormat);
  }

  public getUtcDateTimeInformation(): string {
    return moment().utc(false).format(environment.timeFormat);
  }

  /**
   * String to moment.
   * @param {string} date - date string
   * @param {string} timeZone - timzone param
   * @returns {moment} - date
   */
  public getMoment(date: string, timeZone: string = this.COORDINATED_UNIVERSAL_TIME): momenttz.Moment {
    return momenttz.tz(date, timeZone);
  }

  /**
   * @deprecated This method adds time information to Date.
   * @param {Date} date - param date
   * @returns {Date} - return date with time
   */
  public formatDateToDateTime(date: Date): Date {
    if (CommonFunctionService.isNullOrUndefined(date)) {
      return null;
    }
    const now = moment();
    now.set({year: date.getFullYear(), month: date.getMonth(), day: date.getDay()});
    return new Date(now.toDate());
  }

}
