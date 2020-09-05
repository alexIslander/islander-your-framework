import { FormMessageComponent } from './form-message.component';
import {initContext, TestContext} from '../../../../test/test-context';
import {FormErrorMessageService} from '../../service';
import {of as observableOf} from 'rxjs';
import {TestBed} from '@angular/core/testing';
import {FormControl, ValidationErrors} from '@angular/forms';

xdescribe('FormMessageComponent', () => {

  type Context = TestContext<FormMessageComponent>;
  initContext(FormMessageComponent, {
    providers: [
      {
        provide: FormErrorMessageService,
        useValue: {
          getErrorMessages: () => observableOf({})
        }
      }
    ]
  });

  it('should be initialized', function (this: Context) {
    const formErrorMessageService = TestBed.inject(FormErrorMessageService);
    spyOn(formErrorMessageService, 'getErrorMessages').and.returnValue( { subscribe: () => {} });
    expect(this.component).toBeTruthy();
  });

  xit('should be getValidatorErrorMessage', function (this: Context) {
    const formErrorMessageService = TestBed.inject(FormErrorMessageService);
    spyOn(formErrorMessageService, 'getErrorMessages').and.returnValue( { subscribe: () => {} });
    const spy = spyOn(this.component, 'getValidatorErrorMessage').and.stub();

    // call
    this.component.getValidatorErrorMessage('');
    expect(spy).toHaveBeenCalled();
  });

  xit('should be getValidatorErrorMessage', function (this: Context) {
    const formErrorMessageService = TestBed.inject(FormErrorMessageService);
    this.component.control = {  errors: { 'minlength': true } as ValidationErrors,
                                touched: true
                             } as FormControl;
    spyOn(formErrorMessageService, 'getErrorMessages').and.returnValue( { subscribe: () => {} });
    const spy = spyOn(this.component, 'errorMessage').and.stub();

    // call
    this.component.getValidatorErrorMessage('required');
    expect(spy).toHaveBeenCalled();
  });

});
