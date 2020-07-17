import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { JobDetailsComponent } from './views/job-details/job-details.component';
import { CompanyComponent } from './views/company/company.component';


@NgModule({
  declarations: [PublicComponent, JobDetailsComponent, CompanyComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
