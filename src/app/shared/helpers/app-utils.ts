export class AppUtils {

  static isEqualObject(o1, o2): boolean {
    return Object.entries(o1).toString() === Object.entries(o2).toString();
  }
}
