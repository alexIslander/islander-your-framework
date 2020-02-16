import { Component, OnInit } from '@angular/core';
import {DynamicFieldDirective} from '../dynamic-field.directive';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {has} from '../../service/common-function.service';

@Component({
  selector: 'app-dynamic-toggle',
  templateUrl: './dynamic-toggle.component.html',
  styleUrls: ['./dynamic-toggle.component.scss']
})
export class DynamicToggleComponent extends DynamicFieldDirective implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  onValueSelect($event: MatSlideToggleChange) {
    if (has($event.checked)) {
      this.onSendSelection($event);
    }
  }
}
