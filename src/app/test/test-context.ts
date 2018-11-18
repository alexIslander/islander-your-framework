import {isNullOrUndefined} from 'util';
import {async, ComponentFixture, TestBed, TestModuleMetadata} from '@angular/core/testing';
import {} from 'jasmine';
import {Type} from '@angular/core';
import {TestConfigModuleMetadata} from './test-dependency/test-config-module-metadata';

export class TestContext<H> {
  fixture: ComponentFixture<H>;
  component: H;

  detectChanges() {
    this.fixture.detectChanges();
  }
}

export function initContext<H>(hostType: Type<H>, moduleMetadata: TestModuleMetadata = {}) {
  beforeEach(function() {
    /*
     * Jasmine creates plain objects
     * and modifying their prototype is definitely a bad idea
     */
    Object.assign(this, TestContext.prototype);
  });

  beforeEach(async(function(this: TestContext<H>) {
    initModuleMetadata();
    TestBed.configureTestingModule({...moduleMetadata});
  }));

  beforeEach(function(this: TestContext<H>) {
    this.fixture = TestBed.createComponent(hostType);
    // this.fixture.detectChanges(); TODO must be removed?
    this.component = this.fixture.componentInstance;
  });

  afterEach(function(this: TestContext<H>) {
    if (this.fixture) {
      this.fixture.destroy();
      this.fixture.nativeElement.remove();
    }
  });

  function initModuleMetadata() {
    if (isNullOrUndefined(moduleMetadata.imports)) {
      moduleMetadata.imports = [];
    }
    if (isNullOrUndefined(moduleMetadata.declarations)) {
      moduleMetadata.declarations = [];
    }
    if (isNullOrUndefined(moduleMetadata.providers)) {
      moduleMetadata.providers = [];
    }
    if (isNullOrUndefined(moduleMetadata.schemas)) {
      moduleMetadata.schemas = [];
    }

    moduleMetadata.imports.push(TestConfigModuleMetadata.imports);
    moduleMetadata.declarations.push(hostType, TestConfigModuleMetadata.declarations);
    moduleMetadata.providers.push(hostType, TestConfigModuleMetadata.providers);
    moduleMetadata.schemas.push(TestConfigModuleMetadata.schemas);
  }
}
