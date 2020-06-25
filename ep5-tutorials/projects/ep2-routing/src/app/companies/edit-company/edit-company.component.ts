import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService, DivisionService, TownshipService } from 'projects/api-client/src/public-api';

declare let $: any

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
  profileForm: FormGroup

  @ViewChild('township')
  township: ElementRef

  private currentTab = 'company'

  divisions: any[]
  townships: any[]

  constructor(
    private builder: FormBuilder,
    private comService: CompanyService,
    private divService: DivisionService,
    private tshService: TownshipService
  ) {

    this.profileForm = builder.group({
      id: 0,
      name: '',
      phone: '',
      photo: '',
      greeting: ''
    })

    this.ownerForm = builder.group({
      role: 'Employer',
      login: '',
      profile: this.profileForm
    })


    this.addressForm = builder.group({
      id: 0,
      street: '',
      address: '',
      township: null
    })

    this.form = builder.group({
      id: 0,
      name: '',
      category: '',
      coverPhoto: '',
      greeting: '',
      homePage: '',
      phone: '',
      email: '',
      owner: this.ownerForm,
      address: this.addressForm,
      properties: builder.array([])
    })
  }

  ngOnInit(): void {
    this.divService.findAll().subscribe(data => this.divisions = data)
    $('#tabHeader .item').tab()
    this.addProperty()
    $('.ui.dropdown').dropdown()
  }

  get properties(): FormArray {
    return this.form.get('properties') as FormArray
  }

  changeDivision(divId: number) {
    this.tshService.findByDivision(divId).subscribe(data => {
      this.townships = data
      this.addressForm.get('township').patchValue("0")
      $(this.township.nativeElement).dropdown()
    })
  }

  addProperty() {
    this.properties.push(this.builder.group({
      name: '',
      value: ''
    }))
  }

  deleteProperty(index: number) {
    this.properties.removeAt(index)

    if (this.properties.length == 0) {
      this.addProperty()
    }
  }

  save() {
    let obj = this.form.value
    let tshId = obj.address.township
    obj.address.township = this.townships.filter(a => a.id == tshId).pop()
    console.log(obj)
  }

  get edit() {
    return this.form.get('id').value != 0
  }

  changeTab(tabId: string) {
    this.currentTab = tabId
  }

  isActive(tabId: string) {
    return this.currentTab == tabId
  }

}
