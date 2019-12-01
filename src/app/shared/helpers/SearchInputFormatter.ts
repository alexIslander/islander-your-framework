import {Injectable} from '@angular/core';
import {CommonFunctionService} from '../../shared/service/common-function.service';

@Injectable()
export class SearchInputFormatter {

  private multipleInputSeparators = /[ |\r\n|;|,]+/g;

  constructor(private commonFunctionService: CommonFunctionService) {
    // NOOP
  }

  /**
   * Formats the search criteria into a consistent
   * string array with the help of @var multipleInputSeparator
   * for sending it to the server
   * @param searchInput
   */
  public formatSearchCriteriaForSend(searchInput: string): string[] {
    if (!searchInput) {
      return [];
    }

    return searchInput.split(this.multipleInputSeparators).filter((e) => {
      return e.length > 0;
    });
  }

  /**
   * Formats the search input after uploading a file or
   * sending manual input
   * for user readability
   * @param rawInputText
   */
  public formatSearchFieldText(rawInputText: string): string {
    return rawInputText.replace(this.multipleInputSeparators, ' ');
  }

  /**
   * Filters any input to be a valid
   * float number
   *
   * @param input - the input value
   * @param decimalRound - how much decimal numbers should be visible & rounded
   */
  public filterFloatInput(input: string, decmialRound: number): string {
    input += '';

    if (this.commonFunctionService.isNullOrUndefined(input) || this.commonFunctionService.isNullOrUndefined(input.split)) {
      return input;
    }

    // Prevent & trim multiple decimal points and only
    // keep the first part of the string
    if (input.split('.').length - 1 > 1) {
      input = input.split('.')[0];
    }

    return (+input).toFixed(decmialRound);
  }
}
