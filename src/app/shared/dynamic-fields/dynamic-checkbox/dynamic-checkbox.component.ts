import { Component, OnInit } from '@angular/core';
import {DynamicFieldDirective} from '../dynamic-field.directive';

@Component({
  selector: 'app-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss']
})
export class DynamicCheckboxComponent extends DynamicFieldDirective implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
