import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomKitchenSinkComponent } from './custom-kitchen-sink.component';
import {FormBuilder} from '@angular/forms';

describe('CustomKitchensinkComponent', () => {
  let component: CustomKitchenSinkComponent;
  let fixture: ComponentFixture<CustomKitchenSinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomKitchenSinkComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomKitchenSinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
