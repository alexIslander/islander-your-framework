import { Injectable } from '@angular/core';
import {ISandboxDashboardService} from '../ISandboxDashboardService';
import {SandboxHttpHelperService} from '../SandboxHttpHelperService';
import {Observable} from 'rxjs/internal/Observable';
import {DashboardCard} from '../../dto/DashboardCard';
import {of} from 'rxjs/internal/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SandboxDashboardService implements ISandboxDashboardService {

  constructor(private http: HttpClient, public httpHelperService: SandboxHttpHelperService) {
    // NOOP
  }

  getCards(): Observable<DashboardCard[]> {
    // TODO return this.httpHelperService.get<DashboardCard[]>(`/cards`);
    console.error('IssuingDashboardService not implemented');
    return of([]);
  }
}
