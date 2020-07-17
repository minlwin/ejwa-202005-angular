import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { CompanyComponent } from './views/company/company.component';
import { JobDetailsComponent } from './views/job-details/job-details.component';


const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'details/:id', component: JobDetailsComponent },
  { path: 'company/:id', component: CompanyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
