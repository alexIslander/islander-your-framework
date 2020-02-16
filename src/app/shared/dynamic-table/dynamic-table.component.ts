import {Component, OnChanges} from '@angular/core';
import { has, isString} from '../service/common-function.service';
import {AbstractDynamicTableDirective} from './abstract-dynamic-table.directive';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent extends AbstractDynamicTableDirective implements  OnChanges {

  constructor() {
    super();
  }

  ngOnChanges(): void {
    super.init();
  }

  isActiveRow(row: any): object {
    return {'activated' : has(row.highlighted) && row.highlighted};
  }

  getActionLabel(label: string | Array<string>, element: any) {
    if (isString(label)) {
      return label;
    }
    return element.active ? label[1] : label[0];
  }

  getActionIcon(icon: string | Array<string>, element: any) {
    if (isString(icon)) {
      return icon;
    }
    return element.active ? icon[1] : icon[0];
  }
}
