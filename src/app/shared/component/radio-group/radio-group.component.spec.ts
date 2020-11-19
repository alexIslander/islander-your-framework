import { RadioGroupComponent } from './radio-group.component';
import {FormControl, FormGroup} from '@angular/forms';
import {RadioGroupConfig} from '../../dto/component-config/radio-group/radio-group-config';

import {initContext, TestContext} from '../../../test/test-context';

describe('RadioGroupComponent', () => {

  type Context = TestContext<RadioGroupComponent>;
  initContext(RadioGroupComponent, {
    imports: [],
    declarations: [ RadioGroupComponent ]
  });

  it('should create', function(this: Context) {
    this.component.formGroupParam = new FormGroup({ 'a': new FormControl('')});
    this.component.config = {formControlName: 'a', options: ['']} as RadioGroupConfig<string>;
    this.fixture.detectChanges();
    expect(this.component).toBeTruthy();
  });

});
