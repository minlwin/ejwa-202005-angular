import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate.component';
import { CvFormEditComponent } from './cv-form/cv-form-edit/cv-form-edit.component';
import { CvFormComponent } from './cv-form/cv-form.component';
import { FollowingsComponent } from './followings/followings.component';
import { JobApplicationDetailsComponent } from './job-applications/job-application-details/job-application-details.component';
import { JobApplicationsComponent } from './job-applications/job-applications.component';

const routes: Routes = [
  { path: '', component: CandidateComponent },
  { path: 'cv-form', component: CvFormComponent },
  { path: 'cv-form-edit', component: CvFormEditComponent },
  { path: 'applications', component: JobApplicationsComponent },
  { path: 'application-details', component: JobApplicationDetailsComponent },
  { path: 'followings', component: FollowingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
