import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../common';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends AbstractService {

  constructor(http: HttpClient) {
    super(http)
  }

  get api() {
    return `${HOST}/addresses`
  }

  search(form: any) {

    let params = new HttpParams
    params = params.append("division", form.division)
    params = params.append("township", form.township)
    params = params.append("address", form.address)

    return this.http.get<any[]>(`${this.api}/search`, { params: params })
  }
}
