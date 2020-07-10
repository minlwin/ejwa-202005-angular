import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobOffersService {

  constructor() { }

  search(form: any) {
    return of([
      {
        id: 1,
        title: "IT Consultant",
        applyDate: '2020-10-05',
        company: 'SOLT Engineering Co,.Ltd',
        location: 'Yangon'
      }
    ])
  }

  findById(id: any) {
    return of({
      id: 1,
      title: "IT Consultant",
      applyDate: '2020-10-05',
      company: 'SOLT Engineering Co,.Ltd',
      location: 'Yangon'
    })
  }
}
