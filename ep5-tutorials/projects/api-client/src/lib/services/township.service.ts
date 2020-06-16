import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../common';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class TownshipService extends AbstractService {

  get api() {
    return `${HOST}/townships`
  }

  constructor(http: HttpClient) {
    super(http)
  }

  findByDivision(division: number) {
    return this.http.get<any[]>(`${this.api}/division/${division}`)
  }
}
