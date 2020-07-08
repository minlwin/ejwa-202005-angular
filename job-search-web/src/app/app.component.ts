import { Component, ViewChild } from '@angular/core';
import { SignUpComponent } from './security/views/sign-up/sign-up.component';
import { SingInComponent } from './security/views/sing-in/sing-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  @ViewChild(SignUpComponent)
  signUpComponent: SignUpComponent

  @ViewChild(SingInComponent)
  signInComponent: SingInComponent

}
