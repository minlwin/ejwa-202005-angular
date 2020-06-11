import { Component, OnInit } from '@angular/core';
import { DivisionsService } from './divisions.service';
import { TownshipsService } from './townships.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  locations: any[]
  townships: any[]

  selectedDivision: any

  constructor(
    private service: DivisionsService,
    private townshipService: TownshipsService
  ) { }

  ngOnInit(): void {
    this.service.getDivision().subscribe(result => this.locations = result)
  }

  selectDivision(location: any) {
    this.selectedDivision = location

    this.townshipService.findByDivisionId(location.id).subscribe(result => this.townships = result)
  }

}
