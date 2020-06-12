import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from './services/address.service';
import { DivisionsService } from './services/divisions.service';
import { TownshipsService } from './services/townships.service';

declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  divisions: any[]
  townships: any[]
  list: any[]

  form: FormGroup

  constructor(
    builder: FormBuilder,
    divService: DivisionsService,
    private tshService: TownshipsService,
    private addService: AddressService) {

    this.form = builder.group({
      id: 0,
      township: [null, Validators.required],
      street: ["", Validators.required],
      address: ["", Validators.required]
    })

    divService.getAll().subscribe(data => this.divisions = data)
  }

  ngOnInit(): void {
    $('.ui.dropdown').dropdown()
    this.search()
  }

  changeDivision(id: any) {
    this.tshService.findByDivision(id).subscribe(data => {
      this.townships = data
    })
  }

  save() {
    this.addService.create(this.form.value).subscribe(() => this.search())
  }

  search() {
    this.addService.getAll().subscribe(a => this.list = a)
  }

}
