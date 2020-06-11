import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from './common';

const API = `${HOST}/divisions`

@Injectable({
  providedIn: 'root'
})
export class DivisionsService {

  constructor(private http: HttpClient) { }

  getDivision() {
    return this.http.get<any[]>(API)
  }
}
