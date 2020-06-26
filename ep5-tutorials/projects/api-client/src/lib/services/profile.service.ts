import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../common';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends AbstractService {

  protected get api(): string {
    return `${HOST}/profiles`
  }

  constructor(http: HttpClient) {
    super(http)
  }

  saveProfile(member: string, profile: any) {
    let url = `${this.api}/${member}`
    return profile.id ? this.http.put<any>(url, profile) : this.http.post<any>(url, profile)
  }
}
