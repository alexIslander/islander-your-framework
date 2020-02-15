import { inject, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {SnackbarUtil} from '../../../shared/utils/snackbar.util';
import {FrameworkLoaderService} from '../../../shared/service/framework-loader.service';

describe('SnackbarUtil', () => {

  const inputText = 'okButton';
  let snackbarUtil: SnackbarUtil;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule
      ],
      providers: [
        MatSnackBar,
        SnackbarUtil,
        FrameworkLoaderService
      ]
    });
  });

  beforeEach(inject([SnackbarUtil], (util: SnackbarUtil) => {
    snackbarUtil = util;
  }));

  it('should be initialized', () => {
    expect(snackbarUtil).toBeTruthy();
  });

  it('should have showErrorSnackBar method', () => {
    spyOn(snackbarUtil, 'showRawSnackBar').and.callFake(() => {});
    snackbarUtil.showErrorSnackBar(inputText);
    expect(snackbarUtil.showRawSnackBar).toHaveBeenCalledWith(inputText, SnackbarUtil.ERROR_STYLE, 'closeButtonLabel'
      , SnackbarUtil.INFINITE_DURATION);
  });

  it('should have showWarningSnackBar method', () => {
    spyOn(snackbarUtil, 'showRawSnackBar').and.callFake(() => {});
    snackbarUtil.showWarningSnackBar(inputText);
    expect(snackbarUtil.showRawSnackBar).toHaveBeenCalledWith(inputText, SnackbarUtil.WARNING_STYLE, 'okButtonLabel'
      , snackbarUtil.snackbarMessageDuration);
  });

  it('should have showSuccessSnackBar method', () => {
    spyOn(snackbarUtil, 'showRawSnackBar').and.callFake(() => {});
    snackbarUtil.showSuccessSnackBar(inputText);
    expect(snackbarUtil.showRawSnackBar).toHaveBeenCalledWith(inputText, SnackbarUtil.SUCCESS_STYLE, 'okButtonLabel'
      , snackbarUtil.snackbarMessageDuration);
  });

  it('should have showRawSnackBar method - error case', () => {
    spyOn(snackbarUtil, 'showCustomSnackbar').and.callFake(() => {});
    snackbarUtil.showRawSnackBar(inputText, SnackbarUtil.ERROR_STYLE);
    expect(snackbarUtil.showCustomSnackbar).toHaveBeenCalledWith(inputText, false, SnackbarUtil.ERROR_STYLE, SnackbarUtil.ERROR_ICON
      , 'COMMON.CLOSE_BUTTON_LABEL', snackbarUtil.snackbarMessageDuration, true);
  });

  it('should have showRawSnackBar method - warning case', () => {
    spyOn(snackbarUtil, 'showCustomSnackbar').and.callFake(() => {});
    snackbarUtil.showRawSnackBar(inputText, SnackbarUtil.WARNING_STYLE);
    expect(snackbarUtil.showCustomSnackbar).toHaveBeenCalledWith(inputText, false, SnackbarUtil.WARNING_STYLE, SnackbarUtil.WARNING_ICON
      , 'COMMON.OK_BUTTON_LABEL', snackbarUtil.snackbarMessageDuration, false);
  });

  it('should have showRawSnackBar method - success case', () => {
    spyOn(snackbarUtil, 'showCustomSnackbar').and.callFake(() => {});
    snackbarUtil.showRawSnackBar(inputText, SnackbarUtil.SUCCESS_STYLE);
    expect(snackbarUtil.showCustomSnackbar).toHaveBeenCalledWith(inputText, false, SnackbarUtil.SUCCESS_STYLE, SnackbarUtil.SUCCESS_ICON
      , 'COMMON.OK_BUTTON_LABEL', snackbarUtil.snackbarMessageDuration, false);
  });

  it('should have showRawSnackBar method - default case', () => {
    spyOn(snackbarUtil, 'showCustomSnackbar').and.callFake(() => {});
    snackbarUtil.showRawSnackBar(inputText, 'UNDECLARED_STYLE');
    expect(snackbarUtil.showCustomSnackbar).toHaveBeenCalledWith(inputText, false, 'UNDECLARED_STYLE', SnackbarUtil.WARNING_ICON
      , 'okButtonLabel', snackbarUtil.snackbarMessageDuration, false);
  });

  it('should have showCustomSnackbar method', () => {
    // TODO
  });
});
