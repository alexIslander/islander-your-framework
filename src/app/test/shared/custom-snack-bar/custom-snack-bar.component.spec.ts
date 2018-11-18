import { CustomSnackBarComponent } from '../../../shared/custom-snack-bar/custom-snack-bar.component';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material';
import {Routing} from '../../../app-routing';
import {Router} from '@angular/router';
import {initContext, TestContext} from '../../test-context';

describe('CustomSnackBarComponent', () => {
  type Context = TestContext<CustomSnackBarComponent>;
  initContext(CustomSnackBarComponent, {
      imports: [ ],
      declarations: [ ],
      providers: [
        {
          provide:  MatSnackBarRef,
          useValue: {}
        },
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: {}
        },
        { provide: Router, useValue: Routing }
      ]
  });


  it('should create', function(this: Context) {
    expect(this.component).toBeTruthy();
  });
});
