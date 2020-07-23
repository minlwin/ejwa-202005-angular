import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { JobOfferEditComponent } from './views/job-offer-edit/job-offer-edit.component';
import { CompanyEditComponent } from './views/company-edit/company-edit.component';


@NgModule({
  declarations: [EmployerComponent, JobOfferEditComponent, CompanyEditComponent],
  imports: [
    CommonModule,
    EmployerRoutingModule
  ]
})
export class EmployerModule { }
