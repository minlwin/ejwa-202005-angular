import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SecurityService } from '../../services/security.service';

declare let $: any

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent implements OnInit {

  form: FormGroup

  constructor(builder: FormBuilder, private security: SecurityService) {
    this.form = builder.group({
      role: 'Candidate',
      email: ['', Validators.min(4)],
      password: ['', Validators.min(4)],
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  showDialog() {
    $('#signUpDialog').modal('show')
  }

  employerSignUp() {
    this.form.get('role').patchValue('Employer')
    if (this.form.valid) {
      this.handleResult(this.security.signUp(this.form.value))
    }
  }

  candidateSignUp() {
    if (this.form.valid) {
      this.handleResult(this.security.signUp(this.form.value))
    }
  }

  private handleResult(requst: Observable<any>) {
    requst.subscribe(data => {

    })
  }
}
