import { DynamicTableWithSelectionComponent } from './dynamic-table-with-selection.component';
import {initContext, TestContext} from '../../../test/test-context';
import {MatPaginator, MatSort} from '@angular/material';

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
