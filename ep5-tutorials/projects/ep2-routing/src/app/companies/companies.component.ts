import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from 'projects/api-client/src/public-api';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styles: [
  ]
})
export class CompaniesComponent implements OnInit {

  form: FormGroup
  list: any[] = []
  categories: string[] = []

  constructor(
    builder: FormBuilder,
    private service: CompanyService
  ) {
    this.form = builder.group({
      category: "",
      name: ""
    })
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(data => this.categories = data)
  }

  search() {
    this.service.search(this.form.value).subscribe(data => this.list = data)
  }

}
