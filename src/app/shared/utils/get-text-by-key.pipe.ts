import { Pipe, PipeTransform } from '@angular/core';
import {TextData} from './text-data';

@Pipe({
  name: 'getTextByKey'
})
export class GetTextByKeyPipe implements PipeTransform {

  transform(key: string, ...args: string[]): string {
    let text = TextData[key];
    if (args && args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        text = text.replace('#' + (i + 1) + '#', args[i]);
      }
    }
    return text;
  }

}
