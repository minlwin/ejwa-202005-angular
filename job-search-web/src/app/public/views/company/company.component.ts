import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from 'src/app/employer/service/employer.service';
import { SecurityService } from 'src/app/security/services/security.service';
import { CompanyService } from '../../services/company.service';

declare let $: any

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styles: [
  ]
})
export class CompanyComponent implements OnInit {

  company: any
  list = []
  newJob: boolean = true
  ownCompany: boolean = false

  constructor(
    private service: CompanyService,
    private route: ActivatedRoute,
    private security: SecurityService,
    private employer: EmployerService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")

    this.service.findById(id).subscribe(data => {
      this.company = data

      if (this.security.token != null && this.security.role == 'Employer') {
        this.employer.findOwnCompanyId().subscribe(id => {
          this.ownCompany = data.id == id
        })
      }
    })

    this.changeList(id, true)
  }

  changeList(id: string, newJob: boolean) {
    this.newJob = newJob
    this.service.findJobsForCompany(id, newJob).subscribe(result => this.list = result)
  }

}
