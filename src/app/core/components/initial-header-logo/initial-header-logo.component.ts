import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-initial-header-logo',
  templateUrl: './initial-header-logo.component.html',
  styleUrls: ['./initial-header-logo.component.scss']
})
export class InitialHeaderLogoComponent implements OnInit {
  @Input() title: string;
  // determines the number of initial chars in logo
  @Input() doubleInitial = false;
  // determines the position of the titleSuffix compare to the logo
  @Input() position: 'after' | 'below' | 'above' | 'before' = 'after';

  initial: string;
  initialStyle: string;
  titleSuffix: string;

  constructor() {
  }

  ngOnInit(): void {
    this.initial = this.title.substring(0, this.splitPoint());
    this.titleSuffix = this.title.slice(this.splitPoint(), this.title.length);
    this.initialStyle = this.doubleInitial ? 'double-initial' : 'initial';
  }

  /**
   * Determines the point of split. Either position 1 or 2, depends on
   * doubleInitial parameter.
   * @private
   */
  private splitPoint(): number {
    return this.doubleInitial ? 2 : 1;
  }
}
