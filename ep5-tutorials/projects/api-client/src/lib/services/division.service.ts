import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../common';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class DivisionService extends AbstractService {

  get api() {
    return `${HOST}/divisions`
  }

  constructor(http: HttpClient) {
    super(http)
  }
}
