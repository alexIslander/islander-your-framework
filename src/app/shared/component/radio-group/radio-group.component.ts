import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RadioGroupConfig} from '../../dto/component-config/radio-group/radio-group-config';
import {AppUtils} from '../../helpers/app-utils';
import { MatRadioChange } from '@angular/material/radio';
import * as R from 'ramda';
import {MatRadioGroup} from '@angular/material/radio';
import {of} from 'rxjs';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {

  @ViewChild(MatRadioGroup) group: MatRadioGroup;

  @Input()
  config: RadioGroupConfig<string | object | unknown>;

  @Input()
  formGroupParam: FormGroup;
  options: Array<string | object | unknown> = [];
  formControl: FormControl;

  constructor() {
    // NOOP
  }

  ngOnInit() {
    this.formControl = this.formGroupParam.controls[this.config.formControlName] as FormControl;

    of(this.config.options).subscribe(orders => {
      this.options = orders as Array<string | object | unknown>;
    });
  }

  selection($event: MatRadioChange) {
    // console.log($event, this.formGroupParam.get(this.config.formControlName));
  }

  isChecked(value: any, option: string | object | unknown) {
    return R.type(option) === 'String' ?
     this.formGroupParam.get(this.config.formControlName).value === option :
      AppUtils.isEqualObject(this.formGroupParam.get(this.config.formControlName).value, option);
  }

  orientation(): string {
    return this.config.orientation && this.config.orientation === 'vertical' ? 'radio-group-column' : 'radio-group';
  }

  color(): string {
    return this.config.color === undefined ? 'primary' : this.config.color;
  }

}
