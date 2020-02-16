import { Component, OnInit } from '@angular/core';
import {DynamicFieldDirective} from '../dynamic-field.directive';

@Component({
  selector: 'app-dynamic-option',
  templateUrl: './dynamic-option.component.html',
  styleUrls: ['./dynamic-option.component.scss']
})
export class DynamicOptionComponent extends DynamicFieldDirective implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
// TODO fix html is faulty
  onValueSelect($event) {

  }
}
