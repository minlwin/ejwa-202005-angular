import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from './security/services/security.service';
import { SignUpComponent } from './security/views/sign-up/sign-up.component';
import { SingInComponent } from './security/views/sing-in/sing-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  constructor(private security: SecurityService, private router: Router) {
  }

  @ViewChild(SignUpComponent)
  signUpComponent: SignUpComponent

  @ViewChild(SingInComponent)
  signInComponent: SingInComponent

  signout() {
    this.security.singOut()
    this.router.navigate(['/'])
  }

  profile() {
    let str = (this.security.role as string).toLowerCase()
    this.router.navigate([`/${str}`])
  }

  get role(): string {
    return this.security.role
  }

  get authenticated(): boolean {
    return this.security.token != null && this.security.token != undefined
  }

  get userName(): string {
    return this.security.userName
  }

}
