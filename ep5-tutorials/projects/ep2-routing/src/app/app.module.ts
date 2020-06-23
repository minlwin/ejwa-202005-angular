import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddressesComponent } from './addresses/addresses.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { EditCompanyComponent } from './companies/edit-company/edit-company.component';
import { EmployersComponent } from './employers/employers.component';
import { DropdownComponent } from './ui/dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    AddressesComponent,
    EmployersComponent,
    EditCompanyComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
