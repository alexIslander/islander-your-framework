import {AutoCompleteComponent} from '../../../shared/autocomplete/autocomplete.component';
import {FrameworkLoaderService} from '../../../shared/service/framework-loader.service';
import {initContext, TestContext} from '../../test-context';
import {EventEmitter, SimpleChange} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

import {TestBed} from '@angular/core/testing';
import {Named} from '../../../shared/dto/Named';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

describe('AutocompleteComponent', () => {

  const namedParam = { displayName: 'aa'} as Named;

  type Context = TestContext<AutoCompleteComponent>;
  initContext(AutoCompleteComponent, {
    imports: [ ],
    declarations: [ ],
    providers: [
      FrameworkLoaderService,
      FormBuilder
    ]
  });

  it('should fire ngOnInit', function(this: Context) {
    const f: FormBuilder = TestBed.inject(FormBuilder);
    const formGroupParam = f.group({
      autoCompleteControl: new FormControl(['', Validators.required])
    });
    this.component.displayTitle = 'title';
    this.component.formGroupParam = f.group({
      autoCompleteControl: new FormControl(['', Validators.required])
    });

    this.component.options = [namedParam, namedParam] as Named[];
    this.component.selectionEvent = new EventEmitter<Named>();

    spyOn(this.component, 'ngOnInit').and.callThrough();
    // call
    this.component.ngOnInit();
    // verify
    expect(this.component.ngOnInit).toHaveBeenCalled();
    expect(this.component.displayTitle).toEqual('title');
    expect(this.component.formGroupParam).toBeDefined();
    expect(this.component.options.length).toEqual(2);
  });

  it('should fire ngOnInit without autoCompleteControl', function(this: Context) {
    const f: FormBuilder = TestBed.inject(FormBuilder);
    const formGroupParam = f.group({
      autoCompleteControl: new FormControl(['', Validators.required])
    });
    this.component.displayTitle = 'title';
    this.component.formGroupParam = f.group({
      a: new FormControl(['', Validators.required])
    });

    this.component.options = [namedParam, namedParam] as Named[];
    this.component.selectionEvent = new EventEmitter<Named>();

    spyOn(this.component, 'ngOnInit').and.callThrough();
    // call
    this.component.ngOnInit();
    // verify
    expect(this.component.ngOnInit).toHaveBeenCalled();
    expect(this.component.displayTitle).toEqual('title');
    expect(this.component.formGroupParam).toBeDefined();
    expect(this.component.options.length).toEqual(2);
  });

  it('should fire displayFn', function (this: Context) {
    spyOn(this.component, 'displayFn').and.callThrough();

    // call
    this.component.displayFn(namedParam);
    // verify
    expect(this.component.displayFn).toHaveBeenCalled();
  });

  it('should fire onSendSelection', function (this: Context) {
    spyOn(this.component, 'onSendSelection').and.callThrough();
    // call
    this.component.onSendSelection({option: { value: 'aa'}} as MatAutocompleteSelectedEvent);
    // verify
    expect(this.component.onSendSelection).toHaveBeenCalled();
  });

  it('should fire filter', function (this: Context) {
    // prepared
    this.component.displayOptions = [ namedParam ];
    spyOn(this.component, 'filter').and.callThrough();
    // call
    this.component.filter('aa');
    // verify
    expect(this.component.filter).toHaveBeenCalled();
  });

  it('should fire ngOnChanges', function (this: Context) {
    // prepared
    const f: FormBuilder = TestBed.inject(FormBuilder);
    const formGroupParam = f.group({
      autoCompleteControl: new FormControl(['', Validators.required])
    });
    this.component.formGroupParam = formGroupParam;
    this.component.options = [namedParam, namedParam] as Named[];
    spyOn(this.component, 'ngOnChanges').and.callThrough();
    // call
    this.component.ngOnChanges({ options: new SimpleChange(null, [ namedParam ], true)});
    // verify
    expect(this.component.ngOnChanges).toHaveBeenCalled();
    expect(this.component.displayOptions.length).toEqual(2);
  });
});
