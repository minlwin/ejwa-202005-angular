import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private security: SecurityService,
    private router: Router
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
          $('#signInDialog').modal('hide')
          // navigate homes accordint to their role
          let str = (this.security.role as string).toLowerCase()
          this.router.navigate([`/${str}`])
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
