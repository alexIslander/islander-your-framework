import { Component, OnInit } from '@angular/core';
import {DynamicField} from '../dynamic.field';
import {MatRadioChange} from '@angular/material/radio';
import {has} from '../../service/common-function.service';

@Component({
  selector: 'app-dynamic-radio-group',
  templateUrl: './dynamic-radio-group.component.html',
  styleUrls: ['./dynamic-radio-group.component.scss']
})
export class DynamicRadioGroupComponent extends DynamicField implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  onValueSelect($event: MatRadioChange) {
    if (has($event.value)) {
      this.onSendSelection($event.value);
    }
  }
}
