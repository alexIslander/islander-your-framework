import {Inject, Injectable} from '@angular/core';
import {FormErrorMessageConfigService} from './form-error-message-config.service';
import {Observable, of} from 'rxjs';
import {SharedTextData} from '../../shared-text-data';
import {ApplicationTextData} from '../../../application-text-data';

@Injectable({
  providedIn: 'root'
})
export class FormErrorMessageService {
  private readonly _config: Object;
  private readonly _errorMessages: Object;
  private readonly _textData: Object;
  constructor(@Inject(FormErrorMessageConfigService) private config) {
    this._config = config;
    this._errorMessages = this._config['mappings'];
    this._textData =  { ...SharedTextData, ...ApplicationTextData };
  }

  getErrorMessages(): Observable<Object> {
    return of(this._errorMessages);
  }

  getTextData(): Object {
    return this._textData;
  }
}
