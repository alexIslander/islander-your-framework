import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardCard} from '../dto/DashboardCard';
import {SnackbarUtil} from '../../shared/utils/snackbar.util';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {SandboxDashboardService} from '../service/impl/SandboxDashboardService';
import {takeUntil} from 'rxjs/operators';
import {componentDestroyed} from 'ng2-rx-componentdestroyed';
import {ConfirmationWindowComponent} from '../../shared/confirmation-window/confirmation-window.component';
import {hasNot} from '../../shared/service/common-function.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class SandboxHomeComponent implements OnInit, OnDestroy {

  [key: string]: any; // componentDestroyed
  cards: DashboardCard[];

  constructor(private sandBoxDashboardService: SandboxDashboardService,
              private snackBar: SnackbarUtil,
              private router: Router,
              private dialog: MatDialog) {
    // NOOP
  }

  ngOnInit() {
    this.sandBoxDashboardService.getCards().subscribe(cards => this.cards = cards);
  }

  ngOnDestroy(): void {
    // NOOP
  }

  onNavigate(event: any, s?: string) {
    this.router.navigate(hasNot(s)  ? ['/sandbox/home'] : ['/sandbox/' + s]);
  }

  getCardClass(disabled: boolean): string {
    return disabled ? 'example-card-disabled ui-g-3' : 'example-card ui-g-3';
  }

  onCardAction(event: any, card: any) {
    if (card.disabled) {
      this.snackBar.showWarningSnackBar('cardIsNotAvailable');
    } else {
      if (card.config.length === 0 && card.nav.length === 1) {
        this.onNavigate(event, card.nav[0]);
      } else {
        this.onDialogOpen(event, card);
      }
    }
  }

  onDialogOpen(event: any, card: any) {
    const dialogRef = this.dialog.open(ConfirmationWindowComponent, {
      data: {
        'confirmationText': 'COMMON.CONFIRMATION_MESSAGE'
      },
      disableClose: true
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe((out) => {
        this.snackBar.showSuccessSnackBar('COMMON.ACTION_PERFORMED_SUCCESSFUL_MESSAGE');
      });
  }

  onDonothing(event: any) {
    // NOOP
  }
}
