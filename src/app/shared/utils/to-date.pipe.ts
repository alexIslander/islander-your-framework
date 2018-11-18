import { Pipe, PipeTransform } from '@angular/core';
import {DateFormatterUtil} from './date-formatter.util';

@Pipe({
  name: 'toDate'
})
export class ToDatePipe implements PipeTransform {

  constructor(private dateFormatter: DateFormatterUtil) {
    // NOOP
  }

  transform(text: string): string {
    return this.dateFormatter.formatDateStringToString(text);
  }

}
