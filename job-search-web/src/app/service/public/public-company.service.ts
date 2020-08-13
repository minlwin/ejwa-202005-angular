import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API } from '../../security/services/config';
const API = `${BASE_API}/public/companies`

@Injectable({
  providedIn: 'root'
})
export class PublicCompanyService {

  constructor(private http: HttpClient) { }

  findById(id: string) {
    return this.http.get<any>(`${API}/${id}`)
  }
}
