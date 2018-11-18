import { Injectable } from '@angular/core';
import {DateFormatterUtil} from '../utils/date-formatter.util';
import {MaterialDataSource} from './material-data-source';

@Injectable({
  providedIn: 'root'
})
export class MaterialTableHelper {

  constructor(private dateFormatter: DateFormatterUtil) {
    // NOOP
  }

  /**
   * Sorts the table
   * @param data - data
   * @param sortEvent - event
   * @returns - ds
   */
  sortTable(data: any, sortEvent: any): MaterialDataSource {
    const sortBy = sortEvent.active;
    const order = sortEvent.direction;
    const isDate = sortBy === 'creationDate' || sortBy === 'modificationDate';

    return new MaterialDataSource(
      data.sort((a, b) => {
          if (isDate) {
            a[sortBy] = a[sortBy] === null ? null : new Date(a[sortBy]);
            b[sortBy] = b[sortBy] === null ? null : new Date(b[sortBy]);
          }
          return (a[sortBy] < b[sortBy] ? -1 : 1) * (order === 'asc' ? 1 : -1);
        }
      ));
  }

  /**
   * Handles a single checkbox change event
   * @param pageData Which table page is affected
   * @param checkboxArray Which checkbox array is affected
   * @param uniqueIdentifierName which element of the object is used for comparison
   * @param uniqueIdentifierValue to whom the element should compared with
   */
  onSingleCheckboxClick(pageData: Array<any>, checkboxArray: Array<any>,
                        uniqueIdentifierName: string, uniqueIdentifierValue: any): Array<any> {
    let checkboxObject;
    let checkboxObjectIndex;

    for (const data of pageData) {
      if (data[uniqueIdentifierName] === uniqueIdentifierValue) {
        checkboxObject = data;
        break;
      }
    }

    if (checkboxObject) {
      checkboxObjectIndex = checkboxArray.indexOf(checkboxObject);
      if (checkboxObjectIndex === -1) {
        checkboxArray.push(checkboxObject);
      } else {
        checkboxArray.splice(checkboxObjectIndex, 1);
      }
    }

    return checkboxArray;
  }

  /**
   * Changes every checkbox in the table to either true or false
   * @param checkboxArray -checkboxes
   * @param value - boolean flag
   */
  changeAllCheckboxes(checkboxArray: Object, value: boolean): Object {
    if (checkboxArray) {
      for (const key of Object.keys(checkboxArray)) {
        checkboxArray[key] = value;
      }
    }
    return checkboxArray;
  }
}
