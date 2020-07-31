import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployerService } from '../../service/employer.service';

@Component({
  templateUrl: './company-edit.component.html',
  styles: [
  ]
})
export class CompanyEditComponent implements OnInit {

  form: FormGroup

  constructor(builder: FormBuilder, private service: EmployerService, private router: Router) {
    this.form = builder.group({
      id: 0,
      name: ["", Validators.required],
      category: ["", Validators.required],
      founded: ["", Validators.required],
      location: ["", Validators.required],
      homePage: "",
      logo: "",
      aboutUs: ["", Validators.required],
      visions: ""
    })
  }

  ngOnInit() {

  }

  save() {
    this.service.save(this.form.value).subscribe(data => {
      this.router.navigate(['/public/company', data.id])
    })
  }

  uploadPhoto() {

  }

}
