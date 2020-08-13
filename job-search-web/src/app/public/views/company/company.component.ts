import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from 'src/app/security/services/security.service';
import { PublicJobService } from 'src/app/service/public/public-job.service';
import { EmployerService } from '../../../service/auth/employer.service';
import { PublicCompanyService } from '../../../service/public/public-company.service';

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
  status: string
  ownCompany: boolean = false

  constructor(
    private service: PublicCompanyService,
    private jobs: PublicJobService,
    private route: ActivatedRoute,
    private router: Router,
    private security: SecurityService,
    private employer: EmployerService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")

    this.service.findById(id).subscribe(data => {
      this.company = data

      if (this.security.token != null && this.security.role == 'Employer') {
        this.employer.findOwnCompany().subscribe(company => {
          this.ownCompany = company.id == id
        })
      }
    })

    this.changeList(id, 'Published')
  }

  changeList(id: string, status: string) {
    this.status = status
    this.jobs.searchForCompany(id, status).subscribe(result => {
      this.list = result
      console.log(result)
    })
  }

  editCompany() {
    this.router.navigate(['/employer/company-edit', this.company.id])
  }

}
