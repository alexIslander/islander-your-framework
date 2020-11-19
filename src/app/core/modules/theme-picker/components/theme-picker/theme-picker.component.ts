import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SelectComponent} from '../../../../../shared/component/select/select.component';
import {FormControl, FormGroup} from '@angular/forms';
import {ThemeItem, ThemePickerService} from '../../services/theme-picker.service';
import {SelectConfig} from '../../../../../shared/dto/component-config/select/select-config';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit, AfterViewInit {

  @ViewChild(SelectComponent) colorPickerController: SelectComponent;

  @Input()
  config: SelectConfig<ThemeItem>;

  @Input()
  formGroupParam: FormGroup;
  formControl: FormControl;

  constructor(private themePickerService: ThemePickerService) {
    // NOOP
  }

  ngOnInit(): void {
    this.formControl = this.formGroupParam.controls[this.config.formControlName] as FormControl;

    this.themePickerService.colorClass$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.formControl.patchValue(this.themePickerService
          .findSelection(this.config.options as Array<ThemeItem>))
      );
  }

  ngAfterViewInit(): void {
    this.colorPickerController.formControl.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(ch => this.pickThemeColor((ch as ThemeItem).cssClass));
  }

  private pickThemeColor(color: string): void {
    this.themePickerService.setColorClass(color);
  }

}
