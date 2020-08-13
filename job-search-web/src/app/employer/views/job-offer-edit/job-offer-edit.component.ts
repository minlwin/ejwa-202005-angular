import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/security/services/security.service';
import { JobOfferService } from '../../../service/auth/job-offer.service';

@Component({
  templateUrl: './job-offer-edit.component.html',
  styles: [
  ]
})
export class JobOfferEditComponent implements OnInit {

  form: FormGroup

  constructor(private builder: FormBuilder,
    private security: SecurityService,
    private service: JobOfferService,
    private router: Router) {
    this.form = builder.group(
      {
        title: ["", Validators.required],
        location: ["", Validators.required],
        jobType: ["", Validators.required],
        qualification: ["", Validators.required],
        expreiance: ["", Validators.required],
        posts: ["", Validators.required],
        salary: ["", Validators.required],
        descriptions: builder.array([])
      }
    )

    this.addNewAttribute()
  }

  addNewAttribute() {
    let descriptions = this.form.get('descriptions') as FormArray
    let item = this.builder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
    descriptions.push(item)
  }

  removeAttribute(index: number) {
    this.descriptions.removeAt(index)
  }

  save() {
    let jobOffer = this.form.value
    jobOffer.satatus = "Saved"
    jobOffer.company = this.security.company
    this.service.create(jobOffer).subscribe(() => this.router.navigate(['/employer']))
  }

  publish() {
    let jobOffer = this.form.value
    jobOffer.satatus = "Published"
    jobOffer.company = this.security.company
    this.service.create(jobOffer).subscribe(() => this.router.navigate(['/employer']))
  }

  get descriptions() {
    return this.form.get('descriptions') as FormArray
  }

  ngOnInit(): void {
  }

}
