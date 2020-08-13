import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicJobService } from '../../../service/public/public-job.service';

@Component({
  templateUrl: './job-details.component.html',
  styles: [
  ]
})
export class JobDetailsComponent implements OnInit {

  job: any

  constructor(private route: ActivatedRoute, private service: PublicJobService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.service.findById(id).subscribe(data => this.job = data)
  }

}
