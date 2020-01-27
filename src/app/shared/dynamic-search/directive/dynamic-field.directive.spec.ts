import { DynamicFieldDirective } from './dynamic-field.directive';
import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {inject, TestBed} from '@angular/core/testing';

describe('DynamicFieldDirective', () => {

  let getDynamicFieldDirective: DynamicFieldDirective;
  let resolver: ComponentFactoryResolver;
  let containerRef: ViewContainerRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComponentFactoryResolver,
        ViewContainerRef,
        DynamicFieldDirective
      ]
    });
  });

  beforeEach(inject([DynamicFieldDirective, ComponentFactoryResolver, ViewContainerRef],
    (directive: DynamicFieldDirective, resolverParam: ComponentFactoryResolver, ref: ViewContainerRef) => {
    getDynamicFieldDirective = directive;
    resolver = resolverParam;
    containerRef = ref;
  }));

  it('should be initialized', () => {
    expect(getDynamicFieldDirective).toBeTruthy();
  });

  // it('should create an instance', () => {
  //   const directive = new DynamicFieldDirective();
  //   expect(directive).toBeTruthy();
  // });
});
