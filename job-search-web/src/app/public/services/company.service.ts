import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  findById(id: any) {
    return of({})
  }
}
