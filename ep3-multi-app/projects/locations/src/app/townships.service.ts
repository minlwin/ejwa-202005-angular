import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from './common';

const API = `${HOST}/townships`
@Injectable({
  providedIn: 'root'
})
export class TownshipsService {

  constructor(private http: HttpClient) { }

  findByDivisionId(id: string) {
    return this.http.get<any[]>(`${API}/division/${id}`)
  }
}
