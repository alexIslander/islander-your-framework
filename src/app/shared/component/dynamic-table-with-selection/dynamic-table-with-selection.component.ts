import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {AbstractDynamicTable} from '../../dynamic-table/abstract-dynamic-table';
import {has} from '../../service/common-function.service';

const DEFAULT_COLUMN_DEFINITION = [
  {
    columnDef: 'select',
    columnTitleTextKey: 'exampleIdDataColumnTitle',
    sortable: false
  },
  {
      columnDef: 'id',
      columnTitleTextKey: 'exampleIdDataColumnTitle',
      sortable: false,
      cell: (element: any) => `${element.position}`
    },
    {
      columnDef: 'name',
      columnTitleTextKey: 'exampleNameDataColumnTitle',
      sortable: true,
      cell: (element: any) => `${element.name}`
    }
  ];

const DEFAULT_COLUMNS = ['select', 'id', 'name'];

@Component({
  selector: 'app-dynamic-table-with-selection',
  templateUrl: './dynamic-table-with-selection.component.html',
  styleUrls: ['./dynamic-table-with-selection.component.scss']
})
export class DynamicTableWithSelectionComponent extends AbstractDynamicTable implements OnChanges {
  @Input() selectionCondition: string;
  selection = new SelectionModel<any>(true, []);

  constructor() {
    super();
  }
  ngOnChanges(changes: SimpleChanges): void {
    super.init();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = has(this.selectionCondition) ?
      this.selection.selected
        .filter(row => has(this.selectionCondition) && row[this.selectionCondition]).length
      : this.selection.selected.length;
    const numRows = has(this.selectionCondition) ?
      this.dataSource.data
        .filter(row => has(this.selectionCondition) && row[this.selectionCondition]).length
      : this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
      this.isAllSelected() ? this.selection.clear() : this.selectAll();
      this.selectionEvent.emit(this.selection.selected);
  }

  private selectAll() {
    has(this.selectionCondition) ?
      this.dataSource.data
        .filter(row => has(this.selectionCondition) && row[this.selectionCondition])
        .forEach(row => this.selection.select(row))
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  onRowClick(element: any) {
    this.selection.toggle(element);
    this.selectionEvent.emit(this.selection.selected);
  }
}
