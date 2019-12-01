import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionService {
  valueObjectAndArrayTypeComparison = '[object Array]';
  valueObjectTypeComparison = '[object Object]';

  constructor() {
    // NOOP
  }

  // -------------------- STATIC-METHODS ----------------------------
  static isNullOrUndefinedOrEmpty = function (object: any): boolean {
    return CommonFunctionService.isNullOrUndefined(object) || object === '';
  };

  static isNullOrUndefined = function (object: any): boolean {
    return object === null || CommonFunctionService.isUndefined(object);
  };

  static isUndefined = function (object: any): boolean {
    return object === undefined;
  };

  // -------------------- STATIC-METHODS ----------------------------

  // -------------------- NON-STATIC ----------------------------
  isNullOrUndefinedOrEmpty(object: any): boolean {
    return CommonFunctionService.isNullOrUndefinedOrEmpty(object);
  }

  isEmptyObject(obj) {
    if (typeof obj === 'object') {
      return Object.keys(obj).length === 0;
    }
  }

  isNullOrUndefined(object: any): boolean {
    return CommonFunctionService.isNullOrUndefined(object);
  }

  isUndefined(object: any): boolean {
    return CommonFunctionService.isUndefined(object);
  }

  allEmpty(value): boolean {
    return (value || '').trim().length === 0;
  }

  /**
   * Convert Object to HttpParams when url params we need match object keys
   * {keyOne:'value',keyTwo:'value'} >>  ?keyOne=value&keyTwo=value
   * @param {Object} obj
   * @returns {HttpParams}
   */
  convertObjectToHttpParams(obj: Object): HttpParams {
    return Object.getOwnPropertyNames(obj)
      .reduce((p, key) => p.set(key, obj[key]), new HttpParams());
  }

  /**
   * Copies an object without passing the reference
   * @param object
   */
  copyObject(object: any): any {
    if (!this.isNullOrUndefined(object)) {
      return JSON.parse(JSON.stringify(object));
    }
  }

  /**
   * Compares two dates with every edge case possible
   * @param date1
   * @param date2
   */
  isSameDate(date1: any, date2: any): boolean {
    if (this.isNullOrUndefined(date1) && this.isNullOrUndefined(date2)) {
      return true;
    }

    if (date1 && this.isNullOrUndefined(date2) || date2 && this.isNullOrUndefined(date1)) {
      return false;
    }

    return (new Date(date1)).toString() === (new Date(date2)).toString();
  }

  /**
   * Compares two objects/arrays  if are the same ... type/size/values/keys and others combinations
   */
  isEqual(value, other): boolean {
    const type = Object.prototype.toString.call(value);
    // If the two objects are not the same type, return false
    if (type !== Object.prototype.toString.call(other)) {
      return false;
    }
    if ([this.valueObjectAndArrayTypeComparison, this.valueObjectTypeComparison].indexOf(type) < 0) {
      return false;
    }
    const valueLen = type === this.valueObjectAndArrayTypeComparison ? value.length : Object.keys(value).length;
    const otherLen = type === this.valueObjectAndArrayTypeComparison ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) {
      return false;
    }
    // Compare properties
    if (type === this.valueObjectAndArrayTypeComparison) {
      for (let i = 0; i < valueLen; i++) {
        if (this.compare(value[i], other[i]) === false) {
          return false;
        }
      }
    } else {
      for (const key in value) {
        if (value.hasOwnProperty(key) && this.compare(value[key], other[key]) === false) {
          return false;
        }
      }
    }
    // If nothing failed, return true
    return true;
  }

  // Compare two items
  compare(item1, item2): boolean {
    const itemType = Object.prototype.toString.call(item1);
    if ([this.valueObjectAndArrayTypeComparison, this.valueObjectTypeComparison].indexOf(itemType) >= 0) {
      if (!this.isEqual(item1, item2)) {
        return false;
      }
    } else {
      if (itemType !== Object.prototype.toString.call(item2)) {
        return false;
      }
      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === '[object Function]') {
        if (item1.toString() !== item2.toString()) {
          return false;
        }
      } else {
        if (item1 !== item2) {
          return false;
        }
      }
    }
  }

  // remove key and value from object if one of the keys values is empty
  removeEmpty(obj) {
    if (has(obj)) {
      if (typeof obj === 'object' && Object.keys(obj).length !== 0) {
        Object.keys(obj).forEach(key => {
          if (obj[key] && isObject(obj[key])) {
            this.removeEmpty(obj[key]);
          } else if (CommonFunctionService.isNullOrUndefined(obj[key]) || obj[key] === '') {
            delete obj[key];
          }
        });
        return obj;
      }
    }
  }

  // rename a list of properties:from your object
  generalMapping(obj, newKeys) {
    const keyValues = Object.keys(obj).map(key => {
      // if is not included in the newKeys then dont include it
      // in the mapped object
      if (newKeys.hasOwnProperty(key)) {
        const newKey = newKeys[key] || key;
        return {[newKey]: obj[key]};
      }
    });
    return Object.assign({}, ...keyValues);
  }

  requiredWhen(requiredControlName, controlToCheckName) {
    return (control: AbstractControl) => {
      const required = control.get(requiredControlName);
      const toCheck = control.get(controlToCheckName);
      if (required.value || !toCheck.value) {
        removeErrors(['required'], required);
        return null;
      }
      const errorValue = `${requiredControlName}_Required_When_${controlToCheckName}`;
      setErrors({required: 'errorValue'}, required);
      return {[errorValue]: true};
    };
  }

  // This function check ,if controllers name are formControls or formGroup ,  and remove the required Validator if one of the controllers is filled
  // if both are empty both are required until one has value
  requiredEither(requiredControlName, controlToCheckName, errorKey?) {
    return (control) => {
      let required;
      let toCheck;

      typeof requiredControlName === 'string' ? required = control.get(requiredControlName) :
        required = control.get(Object.keys(requiredControlName)[0])['controls'][requiredControlName[Object.keys(requiredControlName)[0]].internalController];

      typeof controlToCheckName === 'string' ? toCheck = control.get(controlToCheckName) :
        toCheck = control.get(Object.keys(controlToCheckName)[0])['controls'][controlToCheckName[Object.keys(controlToCheckName)[0]].internalController];

      if (has(errorKey)) {
        const errorIdentifier = Object.keys(errorKey)[0];
        if (required.value || toCheck.value) {
          removeErrors([errorIdentifier], required);
          removeErrors([errorIdentifier], toCheck);
          return null;
        }
        setErrors(errorKey, required);
        setErrors(errorKey, toCheck);
        return errorKey;
      }
      if (required.value || toCheck.value) {
        removeErrors(['required'], required);
        removeErrors(['required'], toCheck);
        return null;
      }
      setErrors({required: ''}, required);
      setErrors({required: ''}, toCheck);
      return true;

    };
  }

  requiredWhenNot(requiredControlName, controlToCheckName) {
    return (control) => {
      const required = control.get(requiredControlName);
      const toCheck = control.get(controlToCheckName);
      if (required.value || toCheck.value) {
        removeErrors(['required'], required);
        return null;
      }
      const errorValue = `${requiredControlName}_Required_When_Not_${controlToCheckName}`;
      setErrors({required: errorValue}, required);
      return {[errorValue]: true};
    };
  }
}

function setErrors(error: { [key: string]: any }, control: AbstractControl) {
  control.setErrors({...control.errors, ...error});
}

function removeErrors(keys: string[], control: AbstractControl) {
  const remainingErrors = keys.reduce((errors, key) => {
    delete errors[key];
    return errors;
  }, {...control.errors});
  control.setErrors(Object.keys(remainingErrors).length > 0 ? remainingErrors : null);
}

export function has(value: any): boolean {
  return !CommonFunctionService.isNullOrUndefined(value);
}

export function hasNot(value: any): boolean {
  return CommonFunctionService.isNullOrUndefined(value);
}

export function isEmptyObject(obj) {
  if (!CommonFunctionService.isNullOrUndefined(obj)) {
    return Object.keys(obj).length === 0;
  }
}

export function isString(value: any) {
  return typeof value === 'string';
}

export function isNumber(value: any) {
  return typeof value === 'number';
}

export function isBoolean(value: any) {
  return typeof value === 'boolean';
}

export function isObject(value: any) {
  return typeof value === 'object';
}

export function isFunction(value: any) {
  return typeof value === 'function';
}

// -------------------- ENUM RELATED FUNCTIONS ----------------------------

/**
 * Returns the enum values
 * @param enumObj enum object
 */
export function getValuesFromEnum(enumValue: any) {
  return Object.values(enumValue);
}

/**
 * Returns the enum values
 * @param enumObj enum object
 */
export function getKeysFromEnum(enumValue: any) {
  return Object.keys(enumValue);
}

/**
 * Handling and removing empty objects even if the object is  a
 * nested object(s) using recursion
 * @param object
 */
export function clearEmpties(o) {
  for (const k in o) {
    if (!o[k] || !isObject(o[k])) {
      continue;
    }
    clearEmpties(o[k]);
    if (Object.keys(o[k]).length === 0 || has(Object.keys(o[k]))) {
      delete o[k];
    }
  }
}

export function uniqueArray(fullArray, prop) {
  const fullArraySingleKey = fullArray.map(el => el[prop]);
  return fullArray.filter((obj, index) => {
    return fullArraySingleKey.indexOf(obj[prop]) === index;
  });
}

/**
 * Get nested values providing array data and nested path
 * @param arrayData
 * @param pathArray

 */
export function accessNestedObjValues(arrayData, pathArray) {
  const nestedValues = [];
  const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
      (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
  };
  arrayData.forEach(internalElem => {
    const name = getNestedObject(internalElem, pathArray);
    nestedValues.push(name);
  });

  return nestedValues.filter(function (el) {
    return el != null;
  });
}

/**
 * using object mutation remove duplicates
 **/
export const uniqByProp = prop => arr =>
  Object.values(
    arr.reduce(
      (acc, item) => (
        item && item[prop] && (acc[item[prop]] = item), acc
      ),
      {}
    )
  );
