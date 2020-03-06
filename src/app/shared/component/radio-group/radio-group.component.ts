import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {of} from 'rxjs/index';
import {RadioGroupConfig} from '../../dto/component-config/radio-group/radio-group-config';
import {AppUtils} from '../../helpers/app-utils';
import { MatRadioChange } from '@angular/material/radio';
import * as R from 'ramda';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
  @Input()
  config: RadioGroupConfig;

  @Input()
  formGroupParam: FormGroup;
  options: Array<any> = [];
  formControl: FormArray;

  constructor() {
    // NOOP
  }

  ngOnInit() {
    this.formControl = this.formGroupParam.controls[this.config.formControlName] as FormArray;
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

  private findSelection() {
    if (typeof this.config.defaultValue === 'string') {
      return [this.options.findIndex(o => o === this.config.defaultValue)];
    } else if (Array.isArray(this.config.defaultValue)) {
      return this.options.map((o, i) => {
        if ((<Array<any>>this.config.defaultValue)
          .find(dv => AppUtils.isEqualObject(dv, o))) {
          return i;
        }
      }).filter(f => f !== undefined);
    } else {
      return [this.options.findIndex(o => AppUtils.isEqualObject(o, this.config.defaultValue))];
    }
  }

}
