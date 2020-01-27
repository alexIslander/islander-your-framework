import {FormGroup} from '@angular/forms';
import {EventEmitter, Input, Output} from '@angular/core';
import {Named} from '../dto/Named';
import {CommonFunctionService} from '../service/common-function.service';

export abstract class BaseCustomComponent {
  @Input() options: Named[];
  @Input() displayTitle: string;
  @Input() styleParam: string;
  @Input() required: boolean;
  @Input() disabledSection: boolean;
  @Input() formGroupParam: FormGroup;

  @Output() selectionEvent = new EventEmitter<Named>();
  @Output() deletionEvent = new EventEmitter<Named>();

  innerFormGroup: FormGroup;
  componentTitle = 'baseComponentTitle';
  componentStyle;

  protected init() {
    if (!CommonFunctionService.isNullOrUndefined(this.displayTitle)) {
      this.componentTitle = this.displayTitle;
    }

    if (CommonFunctionService.isNullOrUndefined(this.styleParam)) {
      this.componentStyle = this.styleParam;
    }

    if (!CommonFunctionService.isNullOrUndefined(this.formGroupParam)) {
      this.innerFormGroup = this.formGroupParam;
      if (this.disabledSection) {
        this.innerFormGroup.disable();
      }
    }
  }

  abstract onSendSelection(res: any): void;
  abstract onSendDeletion(res: any): void;
}
