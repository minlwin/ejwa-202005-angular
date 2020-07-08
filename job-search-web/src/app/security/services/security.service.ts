import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

const LOGIN = "com.jdc.jobsearch.login"
const TOKEN = "com.jdc.jobsearch.token"

const AUTH_URL = "http://localhost:8080/auth"

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

  private set login(data: any) {
    localStorage.setItem(LOGIN, JSON.stringify(data))
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
    localStorage.setItem(TOKEN, data)
  }
}
