import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressService, DivisionService, TownshipService } from 'projects/api-client/src/public-api';
import { } from 'rxjs';

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

  get editDivisionId() {
    return this.editForm.get("township").value?.division?.id
  }

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

    this.editForm = formBuilder.group(new Address)

    divService.findAll().subscribe(a => {
      this.divisions = a;
      $('.ui.dropdown').dropdown()
    })
  }

  ngOnInit() {
    this.searchForm.get("division").valueChanges.subscribe(id => {
      this.tshService.findByDivision(id).subscribe(data => {
        this.searchForm.get('township').patchValue(0)
        this.schTownships = data
      })
    })

    this.editForm.get('division').valueChanges.subscribe(id => this.tshService.findByDivision(id).subscribe(
      townships => {
        this.edtTownships = townships
        let township = this.editForm.get('township').value

        let id = 0

        for (let tsh of townships) {
          if (tsh.id == township.id) {
            id = tsh.id
          }
        }

        this.editForm.get('township').patchValue(id)
        $('.ui.dropdown').dropdown()
      }
    ))
  }

  addNew() {
    this.editForm.patchValue(new Address)
    this.showDialog()
  }

  save() {
    let data = this.editForm.value
    delete data.division
    let township = this.edtTownships.filter(a => a.id == data.township).pop()
    data.township = township

    this.addService.save(data).subscribe(() => {
      $('.ui.modal').modal('hide')
      this.search()
    })
  }

  edit(data: any) {
    // change division
    this.editForm.get('division').patchValue(data.township.division.id)
    this.editForm.patchValue(data)

    $('.ui.dropdown').dropdown()
    this.showDialog()
  }

  private showDialog() {
    $('.ui.modal').modal({ closable: false, autofocus: false }).modal('show')
  }

  search() {
    this.addService.search(this.searchForm.value).subscribe(data => {
      this.list = data
    })
  }

  get editTitle() {
    return this.editForm.get("id").value ? "Edit" : "Add New"
  }
}

class Address {
  public id = 0
  public division = 0
  public township = 0
  public street: string = ""
  public address: string = ""
}
