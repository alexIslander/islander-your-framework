import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RadioGroupConfig} from '../../shared/dto/component-config/radio-group/radio-group-config';

class Label {
  id: string;
  name: string;
}

@Component({
  selector: 'app-custom-kitchen-sink',
  templateUrl: './custom-kitchen-sink.component.html',
  styleUrls: ['./custom-kitchen-sink.component.scss']
})
export class CustomKitchenSinkComponent implements OnInit {

  personForm: FormGroup;

  rawValue:string;
  rawValue2;
  rawValue3;
  rrr;
  radioGroupObjectConfig = {
    id: 'idRadios',
    formControlName: 'radioGroup',
    label: 'SANDBOX.FIRST.LABEL.RADIOS',
    disabled: false,
    options: [
      {id: 'HU', name: 'Hungarian'} as Label,
      {id: 'EN', name: 'English'} as Label
    ],
    fieldToDisplay: 'name',
    defaultValue: {id: 'HU', name: 'Hungarian'} as Label,
  } as RadioGroupConfig<Label>;

  radioGroupStringArrayConfig = {
    id: 'idRadioString',
    formControlName: 'radioGroupStringArray',
    label: 'SANDBOX.FIRST.LABEL.RADIOS',
    disabled: false,
    options: [ 'Hungarian', 'English'],
    defaultValue: 'Hungarian'
  } as RadioGroupConfig<string>;

  radioGroupStringConstantArrayTranslateConfig = {
    id: 'idRadioString',
    formControlName: 'radioGroupStringConstantArrayTranslate',
    label: 'SANDBOX.FIRST.LABEL.RADIOS',
    disabled: false,
    options: [ 'SANDBOX.FIRST.LABEL.OPTION1', 'SANDBOX.FIRST.LABEL.OPTION2'],
    defaultValue: 'SANDBOX.FIRST.LABEL.OPTION1',
    translateOptionContent: true
  } as RadioGroupConfig<string>;

  control1;
  control2;
  control3;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const controls = {};
    controls[this.radioGroupObjectConfig.formControlName] = [this.radioGroupObjectConfig.defaultValue];
    controls[this.radioGroupStringArrayConfig.formControlName] = [this.radioGroupStringArrayConfig.defaultValue];
    controls[this.radioGroupStringConstantArrayTranslateConfig.formControlName] = [this.radioGroupStringConstantArrayTranslateConfig.defaultValue];
    this.personForm = this.fb.group(controls);

    // this.control = controls[this.radioGroupObjectConfig.formControlName];

    this.personForm.valueChanges.subscribe(v => {
      console.log(v);
      this.rawValue = v;
      this.control1 = (this.personForm.controls[this.radioGroupObjectConfig.formControlName].value as Label).name;
      this.control2 = this.personForm.controls[this.radioGroupStringArrayConfig.formControlName].value;
      this.control3 = this.personForm.controls[this.radioGroupStringConstantArrayTranslateConfig.formControlName].value;
    });
  }

}
