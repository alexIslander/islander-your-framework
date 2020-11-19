import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirstComponentService} from '../service/impl/FirstComponentService';
import {Todo} from '../dto/Todo';
import {OnDestroyMixin, untilComponentDestroyed} from '@w11k/ngx-componentdestroyed';
import {BaseDialogViewComponentComponent} from '../../shared/base-dialog-view-component/base-dialog-view-component.component';
import { MatDialog } from '@angular/material/dialog';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent extends OnDestroyMixin implements OnInit, OnDestroy {

  [key: string]: any; // componentDestroyed
  todo = {} as Todo;
  sourceUrl: string;

  constructor(private firstComponentService: FirstComponentService,
              private dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.sourceUrl = environment.anyApiServiceBaseUrl;

    this.firstComponentService.getInitialData()
      .pipe(untilComponentDestroyed(this))
      .subscribe(data => this.todo = data );
  }

  ngOnDestroy(): void {
    // NOOP
  }

  onDialogOpen(event: any, card?: any) {
    const dialogRef = this.dialog.open(BaseDialogViewComponentComponent, {
      data: {
        values: [ this.todo.id, this.todo.userId, this.todo.title, this.todo.completed ],
        title: 'SANDBOX.SANDBOX_DIALOG_TITLE'
      },
      disableClose: true
    });

    dialogRef.afterClosed()
      .pipe(untilComponentDestroyed(this))
      .subscribe((out) => {  });
  }

}
