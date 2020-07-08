import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { SingInComponent } from './views/sing-in/sing-in.component';

@NgModule({
  declarations: [SingInComponent, SignUpComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    SignUpComponent,
    SingInComponent
  ]
})
export class SecurityModule { }
