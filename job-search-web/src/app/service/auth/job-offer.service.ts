import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API } from '../../security/services/config';

const API = `${BASE_API}/jobs`

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  constructor(private http: HttpClient) { }

  create(dto: any) {
    return this.http.post<any>(API, dto)
  }
}
