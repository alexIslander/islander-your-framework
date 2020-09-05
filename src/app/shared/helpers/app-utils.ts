import {AssertionError} from 'assert';

export class AppUtils {

  static isEqualObject(o1, o2): boolean {
    return Object.entries(o1).toString() === Object.entries(o2).toString();
  }

  static assertDefined<T>(value: T): asserts value is NonNullable<T> {
    if (value === undefined || value === null) {
      throw new Error(`Expected 'value' to be defined, but received ${value}`);
    }
  }

  static assertString(value: unknown): asserts value is string {
    if (typeof value !== 'string') {
      throw new Error(`Expected 'value' string, but received ${value}`);
    }
  }

  static assertNumber(value: unknown): asserts value is number {
    if (typeof value !== 'number') {
      throw new Error(`Expected 'value' number, but received ${value}`);
    }
  }

  static assertObject(value: unknown): asserts value is object {
    if (typeof value !== 'object') {
      throw new Error(`Expected 'value' object, but received ${value}`);
    }
  }

}
