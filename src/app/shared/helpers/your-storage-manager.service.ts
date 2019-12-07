/**
 * Responsible for saving/retrieveing data from
 * local storage
 */
import {Injectable} from '@angular/core';
import {AppConstants} from '../../shared/helpers/app-constants';
import {BehaviorSubject} from 'rxjs/Rx';
import {CommonFunctionService} from '../../shared/service/common-function.service';

interface ICache {
  [key: string]: BehaviorSubject<any>;
}

type serializable = object | Object;

@Injectable()
export class YourStorageManager {

  private cache: ICache;

  constructor(private commonFunctionService: CommonFunctionService) {
    this.cache = Object.create(null);
  }

  /**
   * Set , Get , Delete to handle app state needs in local storage
   * Options to save single object (key , [obj]), or array of objects when we want save for that one form state under same in
   * local storage key like (key , [obj1, obj2])
   */
  setLocalStorageItem<T extends serializable>(key: string, value): BehaviorSubject<any> {
    // convert array of objects into one object with key value for each object
    const keyValueFormsObjects = Object.assign({}, ...value);
    // keep only object keys that has values
    const keyValueFormsObjectsFilled = {};
    Object.keys(keyValueFormsObjects).forEach(function (prop) {
      if (keyValueFormsObjects[prop]) {
        keyValueFormsObjectsFilled[prop] = keyValueFormsObjects[prop];
      }
    });
    if (Object.keys(keyValueFormsObjectsFilled).length !== 0) {
      localStorage.setItem(key, JSON.stringify(keyValueFormsObjectsFilled));
      if (this.cache[key]) {
        this.cache[key].next(keyValueFormsObjectsFilled);
        return this.cache[key];
      }
      return this.cache[key] = new BehaviorSubject(keyValueFormsObjectsFilled);
    }
  }

  getLocalStorageItem<T extends serializable>(key: string): BehaviorSubject<any> {
    if (this.cache[key]) {
      return this.cache[key];
    }
      return this.cache[key] = new BehaviorSubject(JSON.parse(localStorage.getItem(key)));
  }

  removeLocalStorageItem(key: string) {
    localStorage.removeItem(key);
    if (this.cache[key]) {
      this.cache[key].next(null);
    }
  }

  /**
   * Saves Access Token
   * @param token
   */
  public saveAccessToken(token: string): void {
    localStorage.setItem(AppConstants.LOCAL_STORAGE_ACCESS_TOKEN_KEY, token);
  }

  /**
   * Gets Access Token
   * @returns {string}
   */
  public getAccessToken(): string {
    const accessToken = localStorage.getItem(AppConstants.LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    return this.commonFunctionService.isNullOrUndefined(accessToken) ? '' : accessToken;
  }

  /**
   * Saves the user name to the storage
   * @param {string} username
   */
  public saveUserName(username: string): void {
    localStorage.setItem(AppConstants.LOCAL_STORAGE_USER_NAME_KEY, username);
  }

  /**
   * Gets the user name from the storage
   * @returns {string}
   */
  public getUserName(): string {
    return localStorage.getItem(AppConstants.LOCAL_STORAGE_USER_NAME_KEY);
  }

  /**
   * Removes every item from the localStorage
   */
  public clearAllData(): void {
    localStorage.clear();
  }

}
