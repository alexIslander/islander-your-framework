import { DynamicTableWithSelectionComponent } from './dynamic-table-with-selection.component';
import {initContext, TestContext} from '../../../test/test-context';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

describe('DynamicTableWithSelectionComponent', () => {
    type Context = TestContext<DynamicTableWithSelectionComponent>;

    initContext(DynamicTableWithSelectionComponent, {
      imports: [],
      declarations: [],
      providers: [
        {provide: MatPaginator, useValue: {}},
        {provide: MatSort, useValue: {}}
      ]
    });

    it('should be initialized', function (this: Context) {
      expect(this.component).toBeTruthy();
    });
});
