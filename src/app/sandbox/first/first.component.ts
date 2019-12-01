import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirstComponentService} from '../service/impl/FirstComponentService';
import {Todo} from '../dto/Todo';
import {takeUntil} from 'rxjs/operators';
import {componentDestroyed} from 'ng2-rx-componentdestroyed';
import {BaseDialogViewComponentComponent} from '../../shared/base-dialog-view-component/base-dialog-view-component.component';
import {MatDialog} from '@angular/material';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, OnDestroy {

  [key: string]: any; // componentDestroyed
  todo = new Object() as Todo;
  sourceUrl: string;

  constructor(private firstComponentService: FirstComponentService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.sourceUrl = environment.anyApiServiceBaseUrl;

    this.firstComponentService.getInitialData()
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe(data => this.todo = data );
  }

  ngOnDestroy(): void {
    // NOOP
  }

  onDialogOpen(event: any, card?: any) {
    const dialogRef = this.dialog.open(BaseDialogViewComponentComponent, {
      data: {
        values: [ this.todo.id, this.todo.userId, this.todo.title, this.todo.completed ],
        title: 'sanBoxDialogTitle'
      },
      disableClose: true
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe((out) => {  });
  }

}
