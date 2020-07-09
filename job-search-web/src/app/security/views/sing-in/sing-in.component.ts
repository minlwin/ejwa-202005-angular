import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from '../../services/security.service';

declare let $: any

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styles: [
  ]
})
export class SingInComponent implements OnInit {

  form: FormGroup
  message: string

  constructor(
    builder: FormBuilder,
    private security: SecurityService
  ) {
    this.form = builder.group({
      email: ["", Validators.min(4)],
      password: ["", Validators.min(4)]
    })
  }

  ngOnInit(): void {
  }

  login() {
    if (this.form.valid) {
      this.security.signIn(this.form.value).subscribe(result => {
        if (result.success) {
          // navigate homes accordint to their role

          $('#signInDialog').modal('hide')
        } else {
          this.message = result.message
        }
      })
    }
  }

  showDialog() {
    $('#signInDialog').modal('show')
  }
}
