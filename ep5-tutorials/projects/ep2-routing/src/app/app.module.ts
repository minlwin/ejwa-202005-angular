import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddressesComponent } from './addresses/addresses.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { EditCompanyComponent } from './companies/edit-company/edit-company.component';
import { EmployersComponent } from './employers/employers.component';


@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    AddressesComponent,
    EmployersComponent,
    EditCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
