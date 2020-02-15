import {ComponentConfig} from '../component-config';
import {DatePickerValidation} from './dateicker-validation';
import {DatepickerHeaderDisplayType} from './datepicker-header-display-type';
import {DatepickerStartViewType} from './datepicker-start-view-type';

/**
 *  startView: The view that the calendar should start in.
 *  startAt: The date to open the calendar to initially. e.g.: new Date(2020, 11, 23)
 *  headerDisplay: show default or custom, default
 *  highlightingDates: option to differentiate days given as function
 *    e.g.: Highlight the 1st and 20th day of each month.
 *    highlightingDates: (d: Moment) => {
 *      const date = d.toDate().getDate();
 *      return (date === 1 || date === 20) ? 'highlight-date-class' : undefined;
 *    }
 *  validation: min, max and custom validation given in this field
 *
 *  Validation examples:
 *    a) min, max, given between two dates given in Date format
 *    validation: {
 *        minDate: new Date(2000,0,1),
 *        maxDate: new Date(2043,11,31)
 *    } as DatePickerValidation,
 *
 *    b) custom exclude: do not allow t select days at weekends
 *    validation: {
 *      dateFilter: (d: Moment): boolean => {
 *         const day = d.toDate().getDay();
 *         return day !== 0 && day !== 6;
 *      }
 *     }
 *  More: https://material.angular.io/components/datepicker/overview
 */
export interface DatepickerConfig extends ComponentConfig {
  startView?: DatepickerStartViewType;
  startAt?: Date;
  validation?: DatePickerValidation;
  headerDisplay?: DatepickerHeaderDisplayType;

  highlightingDates?;
}
