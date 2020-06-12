import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from './common';

const API = `${HOST}/addresses`

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  create(data: any) {
    return this.http.post<any>(API, data)
  }

  getAll() {
    return this.http.get<any[]>(API)
  }

}
