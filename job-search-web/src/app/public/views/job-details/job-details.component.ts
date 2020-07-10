import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobOffersService } from '../../services/job-offers.service';

@Component({
  templateUrl: './job-details.component.html',
  styles: [
  ]
})
export class JobDetailsComponent implements OnInit {

  offer: any

  constructor(private route: ActivatedRoute, private service: JobOffersService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id).subscribe(data => this.offer = data)
  }

}
