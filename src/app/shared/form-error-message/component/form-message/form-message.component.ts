import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormErrorMessageService} from '../../service';
import {CommonFunctionService} from '../../../service/common-function.service';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent {
  @Input() control: FormControl | FormGroup;
  public messageParam;
  private errorMessages: Object;

  constructor(private service: FormErrorMessageService) {
    this.service.getErrorMessages().subscribe( res => this.errorMessages = res);
  }

  getValidatorErrorMessage(validatorName: string) {
    return this.errorMessages[validatorName];
  }

  get errorMessage() {
    if (!CommonFunctionService.isNullOrUndefined(this.control)) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          if (CommonFunctionService.isNullOrUndefined(this.getValidatorErrorMessage(propertyName))) {
            return propertyName;
          }
          if (propertyName === 'minlength' || propertyName === 'maxlength') {
            this.messageParam = this.control.errors[propertyName].requiredLength;
          }
          return this.getValidatorErrorMessage(propertyName);
        }
      }
    }
    return null;
  }
}
