import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BASE_API } from 'src/app/security/services/config';

const API = `${BASE_API}/companies`

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  findById(id: any) {
    return this.http.get<any>(`${API}/${id}`)
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
