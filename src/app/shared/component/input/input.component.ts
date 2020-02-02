import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {InputConfig} from '../../dto/component-config/input/input-config';
import {DocumentEvent} from '../../helpers/document-event';
import {AppConstants} from '../../helpers/AppConstants';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit {

  @ViewChild('inputField', {static: false}) input: ElementRef<HTMLInputElement>;

  @Input()
  config: InputConfig;

  @Input()
  formGroupParam: FormGroup;

  formControl: FormControl;
  fieldValue: any;

  constructor() {
    // NOOP
  }

  ngOnInit() {
    this.formControl = this.formGroupParam.controls[this.config.formControlName] as FormControl;
    this.fieldValue = this.formGroupParam.controls[this.config.formControlName].value;
  }

  ngAfterViewInit(): void {
    const input$ = fromEvent<any>(this.input.nativeElement, DocumentEvent.KEYUP);
    input$.subscribe(
      r => this.fieldValue = r.target.value
    );
  }

  clearInputField() {
    this.formGroupParam.controls[this.config.formControlName].patchValue(AppConstants.EMPTY_STRING);
    this.fieldValue = this.formGroupParam.controls[this.config.formControlName].value;
  }
}
