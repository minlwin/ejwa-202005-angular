import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerComponent } from './employer.component';
import { CompanyEditComponent } from './views/company-edit/company-edit.component';
import { JobOfferEditComponent } from './views/job-offer-edit/job-offer-edit.component';


const routes: Routes = [
  { path: '', component: EmployerComponent },
  { path: 'company-edit', component: CompanyEditComponent },
  { path: 'job-offer-edit', component: JobOfferEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
