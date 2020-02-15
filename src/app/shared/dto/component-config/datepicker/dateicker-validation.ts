/**
 * minDate: The minimum valid date.
 * maxDate: The maximum valid date.
 * dateFilter: custom validation given via function
 */
export interface DatePickerValidation {
  minDate?: Date;
  maxDate?: Date;

  dateFilter?;
}
