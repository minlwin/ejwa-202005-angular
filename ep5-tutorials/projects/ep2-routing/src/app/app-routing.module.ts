import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './addresses/addresses.component';
import { CompaniesComponent } from './companies/companies.component';
import { EditCompanyComponent } from './companies/edit-company/edit-company.component';
import { EmployersComponent } from './employers/employers.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesComponent },
  { path: 'addresses', component: AddressesComponent },
  { path: 'employers', component: EmployersComponent },
  { path: 'edit-company', component: EditCompanyComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
