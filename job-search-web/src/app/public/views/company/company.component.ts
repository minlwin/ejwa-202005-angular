import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private service: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")
    console.log(id)

    this.service.findById(id).subscribe(data => this.company = data)

    this.changeList(id, true)
  }

  changeList(id: string, newJob: boolean) {
    this.newJob = newJob
    this.service.findJobsForCompany(id, newJob).subscribe(result => this.list = result)
  }

}
