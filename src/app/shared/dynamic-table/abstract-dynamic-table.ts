import { EventEmitter, Input, Output, ViewChild, Directive } from '@angular/core';
import {DynamicTableColumnConfig} from './dynamic-table-column-config';
import {MatPaginator, MatSort} from '@angular/material';
import {DynamicTableDataSource} from './dynamic-table-datasource';
import {hasNot} from '../service/common-function.service';

@Directive()
export abstract class AbstractDynamicTable {
  private DEFAULT_COLUMNS: string[] = ['id', 'name'];
  private DEFAULT_COLUMN_DEFINITION: DynamicTableColumnConfig[] = [
    {
      columnDef: 'id',
      columnTitleTextKey: 'exampleIdDataColumnTitle',
      sortable: false
    },
    {
      columnDef: 'name',
      columnTitleTextKey: 'exampleNameDataColumnTitle',
      sortable: true
    }
  ];

  @Input() data: any[];
  @Input() columnDefinitions: DynamicTableColumnConfig[];
  @Input() paginatorPageSizes: number[] = [25, 50, 100, 250];
  @Input() defaultPageSize = 50;
  @Output() selectionEvent = new EventEmitter<any>();
  @Output() actionSelectionEvent = new EventEmitter<any>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource: DynamicTableDataSource;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = this.DEFAULT_COLUMNS;

  protected constructor() {
    // NOOP
  }

  protected init() {
    if (hasNot(this.data)) {
      this.dataSource = new DynamicTableDataSource(this.paginator, this.sort);
    } else {
      this.dataSource = new DynamicTableDataSource(this.paginator, this.sort, this.data);
    }
    if (hasNot(this.columnDefinitions)) {
      this.columnDefinitions = this.DEFAULT_COLUMN_DEFINITION;
    }
    this.displayedColumns = this.columnDefinitions.map(c => c.columnDef);
  }

  onRowClick(element: any) {
    this.selectionEvent.emit(element);
  }

  onActionClick(actionType: string, element: any) {
    this.actionSelectionEvent.emit({'actionType': actionType, 'selection': element});
  }
}
