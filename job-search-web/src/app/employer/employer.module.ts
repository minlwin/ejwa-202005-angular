import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { CompanyEditComponent } from './views/company-edit/company-edit.component';
import { JobOfferEditComponent } from './views/job-offer-edit/job-offer-edit.component';



@NgModule({
  declarations: [EmployerComponent, JobOfferEditComponent, CompanyEditComponent],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployerModule { }
