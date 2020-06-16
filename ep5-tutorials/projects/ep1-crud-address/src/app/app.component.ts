import { Component } from '@angular/core';
import { AddressService, DivisionService, TownshipService } from 'projects/api-client/src/public-api';

declare let $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  divisions: any[] = new Array
  townships: any[] = new Array

  address: any
  list: any[] = new Array

  constructor(divService: DivisionService, private tshService: TownshipService, private addService: AddressService) {
    divService.findAll().subscribe(a => {
      this.divisions = a
      $('.ui.dropdown').dropdown()
    })
  }

  changeDivision(division: any) {
    if (division) {
      this.tshService.findByDivision(division)
    }
  }

  addNew() {
    $('.ui.modal').modal('show')
  }

  edit(data: any) {

  }

  search() {

  }
}
