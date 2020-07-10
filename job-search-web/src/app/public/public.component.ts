import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JobOffersService } from './services/job-offers.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styles: [
  ]
})
export class PublicComponent implements OnInit {

  form: FormGroup
  list = []

  constructor(builder: FormBuilder, private service: JobOffersService, private router: Router) {
    this.form = builder.group({
      job: "",
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
