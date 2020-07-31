import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API } from '../../security/services/config';

const API = `${BASE_API}/companies`

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http: HttpClient) { }

  findOwnCompany() {
    return this.http.get<any>(`${API}/owner`)
  }

  save(data: any) {

    const { id, ...dto } = data

    if (id == 0) {
      return this.http.post<any>(`${API}`, dto)
    } else {
      return this.http.put<any>(`${API}/${id}`, dto)
    }
  }
}
