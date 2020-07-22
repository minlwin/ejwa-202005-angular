import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';
import { CvFormComponent } from './cv-form/cv-form.component';
import { CvFormEditComponent } from './cv-form/cv-form-edit/cv-form-edit.component';
import { JobApplicationsComponent } from './job-applications/job-applications.component';
import { JobApplicationDetailsComponent } from './job-applications/job-application-details/job-application-details.component';
import { FollowingsComponent } from './followings/followings.component';


@NgModule({
  declarations: [CandidateComponent, CvFormComponent, CvFormEditComponent, JobApplicationsComponent, JobApplicationDetailsComponent, FollowingsComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ]
})
export class CandidateModule { }
