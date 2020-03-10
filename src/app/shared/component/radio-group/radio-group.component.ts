import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {of} from 'rxjs/index';
import {RadioGroupConfig} from '../../dto/component-config/radio-group/radio-group-config';
import {AppUtils} from '../../helpers/app-utils';
import { MatRadioChange } from '@angular/material/radio';
import * as R from 'ramda';
import {MatRadioGroup} from '@angular/material/radio';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {

  @ViewChild(MatRadioGroup) group: MatRadioGroup;

  @Input()
  config: RadioGroupConfig;

  @Input()
  formGroupParam: FormGroup;
  options: Array<any> = [];
  formControl: FormControl;

  constructor() {
    // NOOP
  }

  ngOnInit() {
    this.formControl = this.formGroupParam.controls[this.config.formControlName] as FormControl;

    of(this.config.options).subscribe(orders => {
      this.options = orders as Array<any>;
    });
  }

  selection($event: MatRadioChange) {
    // console.log($event, this.formGroupParam.get(this.config.formControlName));
  }

  isChecked(value: any, option: string | object ) {
    return R.type(option) === 'String' ?
     this.formGroupParam.get(this.config.formControlName).value === option :
      AppUtils.isEqualObject(this.formGroupParam.get(this.config.formControlName).value, option);
  }

  orientation(): string {
    return this.config.orientation && this.config.orientation === 'vertical' ? 'radio-group-column' : 'radio-group';
  }

}
