export interface DynamicTableColumnConfig {
  columnDef: string;
  columnTitleTextKey?: string;
  sortable?: boolean;
  cell?: any;
  columnWidth?: string;
  dataType?: string;
  tooltip?: boolean;
  actionDetails?: DynamicTableColumnActionDetails[];
}
export interface DynamicTableColumnActionDetails {
  type: string;
  label?: string | Array<string>;
  icon?: string | Array<string>;
  text?: string;
}
