import { Component, OnInit } from '@angular/core';
import {DynamicField} from '../dynamic.field';

@Component({
  selector: 'app-dynamic-option',
  templateUrl: './dynamic-option.component.html',
  styleUrls: ['./dynamic-option.component.scss']
})
export class DynamicOptionComponent extends DynamicField implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
// TODO fix html is faulty
  onValueSelect($event) {

  }
}
