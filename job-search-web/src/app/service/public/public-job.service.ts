import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API } from '../../security/services/config';
const API = `${BASE_API}/public/jobs`

@Injectable({
  providedIn: 'root'
})
export class PublicJobService {

  constructor(private http: HttpClient) { }

  search(form: any) {
    let params = new HttpParams
    for (let key in form) {
      params = params.append(key, form[key])
    }
    return this.http.get<any[]>(API, { params: params })
  }

  findById(id: string) {
    return this.http.get<any>(`${API}/${id}`)
  }

  searchForCompany(company: string, status: string) {
    return this.http.get<any[]>(`${API}/company/${company}/${status}`)
  }
}
