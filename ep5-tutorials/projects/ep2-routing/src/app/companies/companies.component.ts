import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styles: [
  ]
})
export class CompaniesComponent implements OnInit {

  form: FormGroup
  list: any[] = []

  constructor(
    builder: FormBuilder
  ) {
    this.form = builder.group({
      category: 0,
      name: ""
    })
  }

  ngOnInit(): void {
  }

}
