import {ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Input, OnChanges, OnInit, Output, TemplateRef, ViewContainerRef} from '@angular/core';
import {AllowedInputComponents, AllowedInputTypes, DynamicSearchConfiguration} from '../dynamic-search-configuration';
import {FormGroup} from '@angular/forms';
import {DynamicSearchValidator} from '../dynamic-search-validator';
import {Named} from '../../dto/Named';
import {hasNot} from '../../service/common-function.service';
import {DynamicField} from '../../dynamic-fields/dynamic-field';

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnChanges, OnInit {

  COUNTRY_AGENT_AUTOCOMPLETE = 'countryAgentAutocomplete';

  @Input()
  config: DynamicSearchConfiguration;

  @Input()
  group: FormGroup;

  @Input()
  validator: DynamicSearchValidator;

  @Input()
  tooltipTemplate: TemplateRef<any>;

  @Output() selectionEvent = new EventEmitter<Named>();
  @Output() deletionEvent = new EventEmitter<Named>();
  @Output() actionEvent = new EventEmitter<string>();
  @Output() reset = new EventEmitter<boolean>();
  @Output() keyEvent = new EventEmitter<KeyboardEvent>();
  component: ComponentRef<any>;
  private formGroupParam: FormGroup;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
    // NOOP
  }

  ngOnChanges() {
    // NOOP
  }

  ngOnInit() {
    const isDynamicField = this.config.component instanceof DynamicFieldDirective;
    if (!Object.values(AllowedInputTypes).includes(this.config.inputType) || (isDynamicField && !AllowedInputTypes[this.config.inputType])) {
      const supportedTypes = Object.keys(AllowedInputTypes).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.inputType}).
        Supported types: ${supportedTypes}`
      );
    }
    if (hasNot((this.config.component))) {
      this.config.component = AllowedInputComponents[this.config.inputType];
    }

    const component = this.resolver.resolveComponentFactory<any>(this.config.component);
    this.component = this.container.createComponent(component);
    const dynamicField = <DynamicFieldDirective> this.component.instance;
    dynamicField.config = this.config;
    dynamicField.formGroupParam = this.config.inputType === this.COUNTRY_AGENT_AUTOCOMPLETE ? <FormGroup>this.group.get(this.COUNTRY_AGENT_AUTOCOMPLETE) : this.group;
    dynamicField.validator = this.validator;
    dynamicField.tooltipTemplate = this.tooltipTemplate;

    dynamicField.selectionEvent.subscribe(res => {
      this.selectionEvent.emit(res);
    });
    dynamicField.deletionEvent.subscribe(() => {
      this.deletionEvent.emit();
    });
    dynamicField.actionEvent.subscribe(res => {
      this.actionEvent.emit(res);
    });
    dynamicField.reset.subscribe(res => {
      this.reset.emit(res);
    });
    dynamicField.keyEvent.subscribe(res => {
      this.keyEvent.emit(res);
    });
  }
}
