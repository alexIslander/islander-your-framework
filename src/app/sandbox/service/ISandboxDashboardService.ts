import {Observable} from 'rxjs/internal/Observable';
import {DashboardCard} from '../dto/DashboardCard';

export interface ISandboxDashboardService {

  getCards(): Observable<DashboardCard[]>;
}
