import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';

import { RadioGroupComponent } from './radio-group.component';
import {FormGroup} from '@angular/forms';
import {RadioGroupConfig} from '../../dto/component-config/radio-group/radio-group-config';
import {AppTranslateModule} from '../../module/app-translate/app-translate.module';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';
import {Injector} from '@angular/core';

const translations: any = {'CARDS_TITLE': 'This is a test'};
export class TranslateServiceStub implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

describe('RadioGroupComponent', () => {
  let component: RadioGroupComponent;
  let fixture: ComponentFixture<RadioGroupComponent>;
  let translate: TranslateService;
  let injector: Injector;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioGroupComponent ],
      imports: [
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: TranslateServiceStub},
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    translate = injector.get(TranslateService);
    translate.use('en');

    fixture = TestBed.createComponent(RadioGroupComponent);
    component = fixture.componentInstance;
    component.formGroupParam = new FormGroup({});
    component.config = {formControlName: '', options: []} as RadioGroupConfig;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
