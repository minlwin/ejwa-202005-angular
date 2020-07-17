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
      title: "IT Manager",
      location: "Yangon",
      jobType: "IT & Software Development",
      offerDuration: "4 Days",
      company: {
        id: 1,
        name: "SOLT Engineering Co,.Ltd.",
        logo: "job-image.png",
        category: "Software Development"
      },
      summary: {
        qualification: "BCSC, BE.IT",
        expreiance: "3 Years in Software Development",
        posts: "4 Males or Females",
        salary: "850,000 MMK and Above"
      },
      descriptions: [
        {
          name: "Programming Language",
          description: "Java, Spring, Angular"
        },
        {
          name: "Database",
          description: "MySQL, PostgreSQL, Oracle DB"
        },
        {
          name: "Frameworks",
          description: "Hibernate, Spring REST API, JWT Token Security"
        }
      ]
    })
  }
}
