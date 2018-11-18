import { Pipe, PipeTransform } from '@angular/core';
import {DateFormatterUtil} from './date-formatter.util';

@Pipe({
  name: 'toDateTime'
})
export class ToDateTimePipe implements PipeTransform {

  constructor(private dateFormatter: DateFormatterUtil) {
    // NOOP
  }

  transform(text: string): string {
    return this.dateFormatter.formatDateTimeStringToString(text);
  }

}
