import {Observable} from 'rxjs/internal/Observable';
import {Todo} from '../dto/Todo';

export interface IFirstComponentService {

  getInitialData(): Observable<Todo>;
}
