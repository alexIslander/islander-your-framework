import { Component, OnInit } from '@angular/core';
import {DynamicField} from '../dynamic-field';

@Component({
  selector: 'app-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss']
})
export class DynamicCheckboxComponent extends DynamicField implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
