import { Component, OnInit } from '@angular/core';
import {DynamicField} from '../dynamic.field';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {has} from '../../service/common-function.service';

@Component({
  selector: 'app-dynamic-toggle',
  templateUrl: './dynamic-toggle.component.html',
  styleUrls: ['./dynamic-toggle.component.scss']
})
export class DynamicToggleComponent extends DynamicField implements OnInit {

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
