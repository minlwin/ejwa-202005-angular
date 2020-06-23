import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../common';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends AbstractService {

  protected get api(): string {
    return `${HOST}/companies`
  }

  constructor(http: HttpClient) {
    super(http)
  }

  getCategories() {
    return this.http.get<string[]>(`${this.api}/categories`)
  }

}
