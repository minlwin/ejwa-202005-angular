import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../common';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerService extends AbstractService {

  protected get api(): string {
    return `${HOST}/employers`;
  }

  constructor(http: HttpClient) {
    super(http)
  }

  create(emp: any) {
    return this.http.post<any>(this.api, emp)
  }
}
