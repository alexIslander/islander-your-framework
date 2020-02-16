import { Component, OnInit } from '@angular/core';
import {DynamicFieldDirective} from '../dynamic-field.directive';

@Component({
  selector: 'app-dynamic-autocomplete',
  templateUrl: './dynamic-autocomplete.component.html',
  styleUrls: ['./dynamic-autocomplete.component.scss']
})
export class DynamicAutocompleteComponent extends DynamicFieldDirective implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    // NOOP
  }

}
