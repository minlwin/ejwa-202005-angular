import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from './service/employer.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styles: [
  ]
})
export class EmployerComponent {

  constructor(service: EmployerService, router: Router) {
    // find company of employer
    service.findOwnCompany().subscribe(company => {
      if (company) {
        // if found navigate to company profile
        router.navigate(['/public/company', company.id])
      } else {
        // if not found navigate to edit company profile
        router.navigate(['/employer/company-edit'])
      }
    })

  }

}
