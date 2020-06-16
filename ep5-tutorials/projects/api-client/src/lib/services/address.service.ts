import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../common';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends AbstractService {

  constructor(http: HttpClient) {
    super(http)
  }

  get api() {
    return `${HOST}/addresses`
  }
}
