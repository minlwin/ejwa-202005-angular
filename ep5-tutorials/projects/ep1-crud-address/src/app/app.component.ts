import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressService, DivisionService, TownshipService } from 'projects/api-client/src/public-api';

declare let $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  divisions: any[] = []
  schTownships: any[] = []
  edtTownships: any[] = []

  list: any[] = []

  searchForm: FormGroup
  editForm: FormGroup

  constructor(
    formBuilder: FormBuilder,
    divService: DivisionService,
    private tshService: TownshipService,
    private addService: AddressService
  ) {
    this.searchForm = formBuilder.group({
      division: 0,
      township: 0,
      address: ""
    })

    this.editForm = formBuilder.group({
      id: 0,
      township: null,
      street: "",
      address: ""
    })

    divService.findAll().subscribe(a => {
      this.divisions = a;
      $('.ui.dropdown').dropdown()
    })
  }

  ngOnInit() {
    this.searchForm.get("division").valueChanges.subscribe(id => {
      this.tshService.findByDivision(id).subscribe(data => this.schTownships = data)
    })
  }

  changeDivision(division: any) {
    if (division) {
      this.tshService.findByDivision(division).subscribe(data => {
        this.edtTownships = data
        $('.ui.dropdown').dropdown()
      })
    }
  }

  addNew() {
    $('.ui.modal').modal('show')
  }

  save() {
    this.addService.save(this.editForm.value).subscribe(() => {
      $('.ui.modal').modal('hide')
      this.search()
    })
  }

  edit(data: any) {
    this.editForm.patchValue(data)
    $('.ui.modal').modal('show')
  }

  search() {
    this.addService.search(this.searchForm.value).subscribe(data => this.list = data)
  }

  get editTitle() {
    return this.editForm.get("id").value ? "Edit" : "Add New"
  }
}
