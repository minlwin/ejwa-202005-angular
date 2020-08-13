import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicJobService } from '../service/public/public-job.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styles: [
  ]
})
export class PublicComponent implements OnInit {

  form: FormGroup
  list = []

  constructor(builder: FormBuilder, private service: PublicJobService, private router: Router) {
    this.form = builder.group({
      jobType: "",
      location: ""
    })
  }

  ngOnInit(): void {
    this.search()
  }

  search() {
    this.service.search(this.form.value).subscribe(data => this.list = data)
  }

  showDetails(id: number) {
    this.router.navigate(['/public/details', id])
  }

}
