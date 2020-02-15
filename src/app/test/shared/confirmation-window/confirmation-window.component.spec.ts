import { ConfirmationWindowComponent } from '../../../shared/confirmation-window/confirmation-window.component';
import {initContext, TestContext} from '../../test-context';
import {SnackbarUtil} from '../../../shared/utils/snackbar.util';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {of} from 'rxjs';

describe('ConfirmationWindowComponent', () => {
  type Context = TestContext<ConfirmationWindowComponent>;
  initContext(ConfirmationWindowComponent, {
    declarations: [ ],
    providers: [
      SnackbarUtil,
      {
        provide: MAT_DIALOG_DATA,
        useValue: {
          title: 'title',
          confirmationText: 'text',
          yesButtonText: 'Yes',
          noButtonText: 'No'
        }
      },
      {
        provide: MatDialogRef,
        useValue: {
          beforeClose: () => of(true),
          close: () => { }
        }
      }
      ]
  });

  it('should be initialized', function(this: Context) {
    expect(this.component).toBeTruthy();
  });
});
