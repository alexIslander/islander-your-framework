import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Named} from './Named';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutoCompleteComponent implements OnInit, OnChanges {

  @Input() options: Named[];
  @Input() displayTitle: string;
  @Input() styleParam: string;
  @Input() formGroupParam: FormGroup;
  @Output() selectionEvent = new EventEmitter<Named>();

  componentTitle = 'Please fill in';
  componentStyle;

  innerFormGroup: FormGroup;
  displayOptions: Named[];
  filteredOptions: Observable<Named[]>;

  constructor() {
    // NOOP
  }

  ngOnInit() {
    if (!isNullOrUndefined(this.displayTitle)) {
      this.componentTitle = this.displayTitle;
    }

    if (isNullOrUndefined(this.styleParam)) {
      this.componentStyle = this.styleParam;
    }

    if (!isNullOrUndefined(this.formGroupParam)) {
      this.innerFormGroup = this.formGroupParam;
      if (!this.formGroupParam.contains('autoCompleteControl')) {
        console.log('AutoCompleteControl must be defined in the incoming FormGroup!');
      }
    }
  }

  private processOptions(anies = this.options) {
    this.filteredOptions = (this.formGroupParam.get('autoCompleteControl') as FormControl).valueChanges
      .pipe(
        startWith<string | any>(''),
        map(value => typeof value === 'string' || isNullOrUndefined(value) ? value : value['displayName']),
        map(name => name ? this.filter(name) : anies.slice())
      );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      if (!isNullOrUndefined(this.options)) {
        this.displayOptions = this.options;
        this.processOptions();
      }
    }
  }

  filter(name: string): Named[] {
    return this.displayOptions.filter(option =>
      option['displayName'].toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(option?: Named): string | undefined {
    return option ? option['displayName'] : undefined;
  }

  onSendSelection(res): void {
    this.selectionEvent.emit(res.option.value);
  }

}
