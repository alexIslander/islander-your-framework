import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSelect} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {SelectConfig} from '../../dto/component-config/select/select-config';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, AfterViewInit {

  @ViewChild('select', {static: false}) selector: MatSelect;

  @Input()
  config: SelectConfig;

  @Input()
  formGroupParam: FormGroup;

  formControl: FormControl;
  fieldValue: any;

  constructor() {
    // NOOP
  }

  ngOnInit() {
    this.formControl = this.formGroupParam.controls[this.config.formControlName]  as FormControl;
    this.fieldValue = this.formGroupParam.controls[this.config.formControlName].value;
  }

  ngAfterViewInit(): void {
    const selection$ = this.selector.selectionChange;
    selection$.subscribe(r => this.fieldValue = r.option.value );
  }

}
