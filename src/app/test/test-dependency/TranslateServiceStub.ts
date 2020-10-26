import {TranslateLoader} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';

const translations: any = {'CARDS_TITLE': 'This is a test'};
export class TranslateServiceStub implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}
