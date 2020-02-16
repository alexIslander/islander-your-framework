import { Component, OnInit } from '@angular/core';
import {DynamicFieldDirective} from '../dynamic-field.directive';
import {AppConstants} from '../../helpers/AppConstants';

@Component({
  selector: 'app-dynamic-text',
  templateUrl: './dynamic-text.component.html',
  styleUrls: ['./dynamic-text.component.scss']
})
export class DynamicTextComponent extends DynamicFieldDirective implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    // NOOP
  }

  onKeyEvent($event: KeyboardEvent) {
    if ($event.key === AppConstants.ENTER_EVENT || $event.key === AppConstants.TAB_EVENT) {
      this.keyChangeEvent.emit($event);
    }
  }

}
