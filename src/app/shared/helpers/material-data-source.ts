import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

export class MaterialDataSource extends DataSource<any> {
  private data: any;

  constructor(data: any) {
    super();
    this.data = data;
  }

  connect(): Observable<Element[]> {
    return of(this.data);
  }

  disconnect() { }
}
