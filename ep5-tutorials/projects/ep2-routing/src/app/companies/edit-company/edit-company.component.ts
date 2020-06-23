import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService, DivisionService, TownshipService } from 'projects/api-client/src/public-api';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styles: [
  ]
})
export class EditCompanyComponent implements OnInit {

  form: FormGroup
  ownerForm: FormGroup
  addressForm: FormGroup

  divisions: any[]
  townships: any[]

  constructor(
    builder: FormBuilder,
    private comService: CompanyService,
    private divService: DivisionService,
    private tshService: TownshipService
  ) {

    this.ownerForm = builder.group({

    })

    this.addressForm = builder.group({

    })

    this.form = builder.group({
      properties: builder.array([]),
      owner: this.ownerForm,
      address: this.addressForm
    })
  }

  ngOnInit(): void {
    this.divService.findAll().subscribe(data => this.divisions = data)
  }

}
