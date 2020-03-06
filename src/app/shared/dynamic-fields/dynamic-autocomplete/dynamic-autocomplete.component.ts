import { Component, OnInit } from '@angular/core';
import {DynamicField} from '../dynamic-field';

@Component({
  selector: 'app-dynamic-autocomplete',
  templateUrl: './dynamic-autocomplete.component.html',
  styleUrls: ['./dynamic-autocomplete.component.scss']
})
export class DynamicAutocompleteComponent extends DynamicField implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    // NOOP
  }

}
