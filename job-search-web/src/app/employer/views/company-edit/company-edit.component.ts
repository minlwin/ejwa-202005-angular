import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CompanyService } from 'src/app/public/services/company.service';
import { SecurityService } from 'src/app/security/services/security.service';
import { EmployerService } from '../../service/employer.service';

@Component({
  templateUrl: './company-edit.component.html',
  styles: [
  ]
})
export class CompanyEditComponent implements OnInit {

  form: FormGroup

  constructor(builder: FormBuilder,
    private service: EmployerService,
    private security: SecurityService,
    private companies: CompanyService,
    private route: ActivatedRoute,
    private router: Router) {

    this.form = builder.group({
      id: 0,
      name: ["", Validators.required],
      category: ["", Validators.required],
      founded: ["", Validators.required],
      location: ["", Validators.required],
      size: "",
      homePage: "",
      logo: "",
      aboutUs: ["", Validators.required],
      visions: ""
    })
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id")

    if (id) {
      this.companies.findById(id).pipe(map(c => {
        const { owner, ...dto } = c
        return dto
      })).subscribe(dto => this.form.patchValue(dto))
    }
  }

  save() {
    this.service.save(this.form.value).subscribe(data => {
      this.security.createdCompany(data.id)
      this.router.navigate(['/public/company', data.id])
    })
  }

  uploadPhoto() {

  }

}
