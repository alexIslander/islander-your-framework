import {Pipe, PipeTransform} from '@angular/core';
import {FormErrorMessageService} from './form-error-message.service';

const UNDEFINED_LABEL = '{undefined Label}';

@Pipe({
  name: 'textTranslatePipe'
})
export class TextTranslatePipe implements PipeTransform {
  text: object;
  constructor(private configService: FormErrorMessageService) {
    this.text = configService.getTextData();
  }

  transform(key: string, ...args: string[]): string {
    let text = this.text[key];
    if (text === undefined) {
      text = UNDEFINED_LABEL;
    }
    if (args && args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        text = text.replace('#' + (i + 1) + '#', args[i]);
      }
    }
    return text;
  }
}
