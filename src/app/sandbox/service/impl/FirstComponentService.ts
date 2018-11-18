import { Injectable } from '@angular/core';
import {IFirstComponentService} from '../IFirstComponentService';
import {HttpClient} from '@angular/common/http';
import {AnyApiHttpHelperService} from '../AnyApiHttpHelperService';
import {Observable} from 'rxjs/internal/Observable';
import {Todo} from '../../dto/Todo';

@Injectable({
  providedIn: 'root'
})
export class FirstComponentService implements IFirstComponentService {

  constructor(private http: HttpClient, public httpHelperService: AnyApiHttpHelperService) {
    // NOOP
  }

  getInitialData(): Observable<Todo> {
    return this.httpHelperService.get<Todo>('/todos/1');
  }
}
