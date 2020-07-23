import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor() { }

  findOwnCompanyId() {
    return of(1)
  }
}
