import { Injectable } from '@angular/core';
import {ISandboxDashboardService} from '../ISandboxDashboardService';
import {SandboxHttpHelperService} from '../SandboxHttpHelperService';
import {Observable} from 'rxjs/internal/Observable';
import {DashboardCard} from '../../dto/DashboardCard';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SandboxDashboardServiceMock implements ISandboxDashboardService {

  constructor(private http: HttpClient, public httpHelperService: SandboxHttpHelperService) {
    // NOOP
  }

  getCards(): Observable<DashboardCard[]> {
    return this.http.get<DashboardCard[]>('/assets/mock' + '/sandbox/generator_cards.json');
  }
}
