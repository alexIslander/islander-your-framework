import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {DashboardCard} from '../../sandbox/dto/DashboardCard';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  @Input()
  card: DashboardCard;

  @Output()
  onCardClickEmitter = new EventEmitter<DashboardCard>();

  @Output()
  onActionClickEmitter = new EventEmitter<Function>();

  @Output()
  onNavigateClickEmitter = new EventEmitter<string>();

  constructor() {
    // NOOP
  }

  ngOnInit(): void {
    // NOOP
  }

  onCardClick($event: MouseEvent, card: DashboardCard) {
    this.onCardClickEmitter.emit(card);
  }

  onActionClick($event: MouseEvent, action: Function) {
    this.onActionClickEmitter.emit(action);
  }

  onNavigateClick($event: MouseEvent, nav: any[]) {
    this.onNavigateClickEmitter.emit(nav.length > 0 ? nav[0] : null);
  }

}
