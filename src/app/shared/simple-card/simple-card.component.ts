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
  cardClickEmitter = new EventEmitter<DashboardCard>();

  @Output()
  actionClickEmitter = new EventEmitter<Function>();

  @Output()
  navigateClickEmitter = new EventEmitter<string>();

  constructor() {
    // NOOP
  }

  ngOnInit(): void {
    // NOOP
  }

  onCardClick($event: MouseEvent, card: DashboardCard) {
    this.cardClickEmitter.emit(card);
  }

  onActionClick($event: MouseEvent, action: Function) {
    this.actionClickEmitter.emit(action);
  }

  onNavigateClick($event: MouseEvent, nav: any[]) {
    this.navigateClickEmitter.emit(nav.length > 0 ? nav[0] : null);
  }

}
