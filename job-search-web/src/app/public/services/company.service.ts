import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  findById(id: any) {
    return of({
      id: 1,
      name: "SOLT Engineering Co,.Ltd.",
      logo: "job-image.png",
      category: "Software Development",
      founded: '2013/04',
      employees: '12',
      website: 'http://www.solt-e.com',
      about: '',
      visions: ''
    })
  }

  findJobsForCompany(id: any, newJob: boolean) {
    return of([
      {
        title: "IT Manager",
        location: "Yangon",
        jobType: "IT & Software Development",
        offerDuration: "4 Days",
        requirements: 'BEIT',
        salary: '850000 and above.'
      },
      {
        title: "Junior Java Developer",
        location: "Yangon",
        jobType: "Beckend Devlopment",
        offerDuration: "4 Days",
        requirements: 'BEIT',
        salary: '250000 and above.'
      },
      {
        title: "Front End Developer",
        location: "Yangon",
        jobType: "Angular and Mobile Development",
        offerDuration: "4 Days",
        requirements: 'BEIT',
        salary: '350000 and above.'
      }
    ])
  }
}
