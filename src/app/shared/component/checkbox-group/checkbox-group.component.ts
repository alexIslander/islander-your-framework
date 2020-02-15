import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {CheckboxGroupConfig} from '../../dto/component-config/checkbox-group/checkbox-group-config';
import {of} from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {AppUtils} from '../../helpers/app-utils';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {
  @Input()
  config: CheckboxGroupConfig;

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
      this.addCheckboxes(this.findSelection());
    });
  }

  onChange($event: MatCheckboxChange, i: number) {
    (<FormArray>this.formGroupParam.controls[this.config.formControlName]).value[i] = $event.checked;
  }

  private addCheckboxes(checkedIndex = [0]) {
    // tslint:disable-next-line:forin
    for (const index in this.options) {
      // default first item set to true, else checkedIndex content
      const control = new FormControl(checkedIndex.includes(+index));
      (this.formGroupParam.controls[this.config.formControlName] as FormArray).push(control);
    }
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
