import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ComponentDisabled} from '../../dto/component-config/component-disabled';
import {DatepickerConfig} from '../../dto/component-config/datepicker/datepicker-config';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {DatepickerHeaderDisplayType} from '../../dto/component-config/datepicker/datepicker-header-display-type';
import {CustomDatePickerHeaderComponent} from './custom-date-picker-header/custom-date-picker-header.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent implements OnInit {

  @ViewChild('dateInput') inputElement: ElementRef<HTMLInputElement>;
  @ViewChild('picker') datePickerElement: ElementRef<HTMLInputElement>;

  @Input()
  config: DatepickerConfig;

  @Input()
  formGroupParam: FormGroup;
  formControl: FormControl;

  public readOnly: boolean;
  public fieldValue: any;
  public customHeader: any;

  constructor() {
    // NOOP
  }

  ngOnInit() {
    this.formControl = this.formGroupParam.controls[this.config.formControlName] as FormControl;

    this.readOnly = Object.values(ComponentDisabled).find(conf => conf === this.config.disabled) === ComponentDisabled.DATEPICKER_INPUT;
    if (this.config.disabled === true || Object.values(ComponentDisabled).find(conf => conf === this.config.disabled) === ComponentDisabled.DATEPICKER_ALL) {
      this.formControl.disable();
    }

    if (this.config.headerDisplay && this.config.headerDisplay === DatepickerHeaderDisplayType.CUSTOM) {
      this.customHeader = CustomDatePickerHeaderComponent;
    }
  }

}
