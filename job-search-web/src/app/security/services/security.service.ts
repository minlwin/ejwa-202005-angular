import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BASE_API } from './config';

const LOGIN = "com.jdc.jobsearch.login"
const TOKEN = "com.jdc.jobsearch.token"

const AUTH_URL = `${BASE_API}/auth`

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  signUp(data: any) {
    return this.http.post<any>(`${AUTH_URL}/signup`, data)
      .pipe(tap(data => this.login = data))
  }

  signIn(data: any) {
    return this.http.post<any>(`${AUTH_URL}/login`, data)
      .pipe(tap(data => this.login = data))
  }

  createdCompany(company: any) {
    let login = this.login
    login.company = company
    this.login = login
  }

  singOut() {
    localStorage.clear()
  }

  private set login(data: any) {
    if (data.success) {
      localStorage.setItem(LOGIN, JSON.stringify(data))
    } else {
      this.singOut()
    }
  }

  get company() {
    return this.login.company
  }

  private get login(): any {
    return JSON.parse(localStorage.getItem(LOGIN))
  }

  get userName() {
    return this.login.name
  }

  get role() {
    return this.login.role
  }

  get token() {
    return localStorage.getItem(TOKEN)
  }

  set token(data: string) {
    if (data) {
      localStorage.setItem(TOKEN, data)
    } else {
      localStorage.removeItem(TOKEN)
    }
  }

  get hasOwnCompany(): boolean {
    return null != this.login && this.login.role == 'Employer' && this.login.company != '0'
  }
}
