import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/public', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'employer', loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule) },
  { path: 'candidate', loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule) },
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'member', loadChildren: () => import('./member/member.module').then(m => m.MemberModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
