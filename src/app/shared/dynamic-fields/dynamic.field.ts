import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {BaseCustomComponent} from '../component/base-custom-component';
import {FormGroup} from '@angular/forms';
import {DynamicSearchValidator} from '../dynamic-search/dynamic-search-validator';
import {DynamicSearchConfiguration} from '../dynamic-search/dynamic-search-configuration';

export class DynamicField extends BaseCustomComponent implements OnInit {

  @Input()
  validator: DynamicSearchValidator;
  @Input()
  config: DynamicSearchConfiguration;
  @Input()
  tooltipTemplate: TemplateRef<any>;

  @Output()
  resetEvent = new EventEmitter<string>();
  @Output()
  actionEvent = new EventEmitter<string>();
  @Output()
  keyChangeEvent = new EventEmitter<KeyboardEvent>();

  protected _countryFormGroup: FormGroup; // TODO groups
  protected _refundPointFormGroup: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
    // NOOP
  }

  onSendSelection(res: any): void {
    this.selectionEvent.emit(res);
  }

  onSendDeletion(res?: any): void {
    this.deletionEvent.emit(res);
  }

  onKeyEvent(res?: any): void {
    this.keyChangeEvent.emit(res);
  }

  performAction(action: string) {
    this.actionEvent.emit(action);
  }

  resetController(inputDefinition: string) {
    this.resetEvent.emit(inputDefinition);
  }

  get countryFormGroup(): FormGroup {
    return this._countryFormGroup;
  }

  get refundPointFormGroup(): FormGroup {
    return this._refundPointFormGroup;
  }

  set countryFormGroup(value: FormGroup) {
    this._countryFormGroup = value;
  }

  set refundPointFormGroup(value: FormGroup) {
    this._refundPointFormGroup = value;
  }
}
