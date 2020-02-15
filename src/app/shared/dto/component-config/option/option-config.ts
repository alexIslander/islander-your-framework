import {ComponentConfig} from '../component-config';
import {Observable} from 'rxjs';

/**
 * defaultValue: this value is set when initialized
 * fieldToDisplay: this value isis selected from the item
 * options: collection as values
 *
 * Example option config:
 * a) options from dynamic/static translated string values
 *  options: ['Male', 'Female', 'Not specified'],
 *
 * b) options from dynamic object values
 *  options: [{ "id": 1, "name": "Male" }, { "id": 2, "name": "Female" }, { "id": 3, "name": "Not specified" }],
 *  fieldToDisplay: 'name', <-- must be indicated, which field to display
 *
 * c) options are not translated static key values
 *  options: ['APPLICATION.LANDING_PAGE.LABEL.VAL1', 'APPLICATION.LANDING_PAGE.LABEL.VAL2', 'APPLICATION.LANDING_PAGE.LABEL.VAL3'],
 *  translateOptionContent: true, <-- must be indicated, if translation required
 *
 */
export interface OptionConfig extends ComponentConfig {
  options?: Observable<any> | Array<any>;
  translateOptionContent?: boolean;
  defaultValue?: string | object | Array<any>;
  fieldToDisplay?: string;
}
