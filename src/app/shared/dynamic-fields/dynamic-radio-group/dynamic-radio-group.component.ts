import { Component, OnInit } from '@angular/core';
import {DynamicFieldDirective} from '../dynamic-field.directive';
import {MatRadioChange} from '@angular/material/radio';
import {has} from '../../service/common-function.service';

@Component({
  selector: 'app-dynamic-radio-group',
  templateUrl: './dynamic-radio-group.component.html',
  styleUrls: ['./dynamic-radio-group.component.scss']
})
export class DynamicRadioGroupComponent extends DynamicFieldDirective implements OnInit {

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
