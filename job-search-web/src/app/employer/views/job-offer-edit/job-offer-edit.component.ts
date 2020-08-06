import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './job-offer-edit.component.html',
  styles: [
  ]
})
export class JobOfferEditComponent implements OnInit {

  form: FormGroup

  constructor(builder: FormBuilder) { }

  ngOnInit(): void {
  }

}
