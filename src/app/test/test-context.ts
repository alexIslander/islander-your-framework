///<reference path="../../../node_modules/@types/jasmine/index.d.ts"/>
import {Type} from '@angular/core';
import {ComponentFixture, TestBed, TestModuleMetadata} from '@angular/core/testing';
import {CommonFunctionService} from '../shared/service/common-function.service';
import {TestConfigModuleMetadata} from './test-dependency/test-config-module-metadata';

export class TestContext<H> {
  fixture: ComponentFixture<H>;
  component: H;

  detectChanges(): void {
    this.fixture.detectChanges();
  }
}

export function initContext<H>(hostType: Type<H>, moduleMetadata: TestModuleMetadata = {}) {
  beforeEach(function (this: TestContext<H>) {
    /*
     * Jasmine creates plain objects
     * and modifying their prototype is definitely a bad idea
     */
    Object.assign(this, TestContext.prototype);

    initModuleMetadata();
    TestBed.configureTestingModule({...moduleMetadata});

    this.fixture = TestBed.createComponent(hostType);
    this.component = this.fixture.componentInstance;
  });

  afterEach(function (this: TestContext<H>) {
    if (this.fixture) {
      this.fixture.destroy();
      this.fixture.nativeElement.remove();
    }
    TestBed.resetTestingModule();
  });

  function initModuleMetadata() {
    if (CommonFunctionService.isNullOrUndefined(moduleMetadata.imports)) {
      moduleMetadata.imports = [];
    }
    if (CommonFunctionService.isNullOrUndefined(moduleMetadata.declarations)) {
      moduleMetadata.declarations = [];
    }
    if (CommonFunctionService.isNullOrUndefined(moduleMetadata.providers)) {
      moduleMetadata.providers = [];
    }
    if (CommonFunctionService.isNullOrUndefined(moduleMetadata.schemas)) {
      moduleMetadata.schemas = [];
    }

    moduleMetadata.imports.push(TestConfigModuleMetadata.imports);
    moduleMetadata.declarations.push(hostType, TestConfigModuleMetadata.declarations);
    moduleMetadata.providers.push(hostType, TestConfigModuleMetadata.providers);
    moduleMetadata.schemas.push(TestConfigModuleMetadata.schemas);
  }
}
