import { Component, OnInit } from '@angular/core';

declare let $: any

@Component({
  templateUrl: './job-applications.component.html',
  styles: [
  ]
})
export class JobApplicationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.ui.dropdown').dropdown()
  }

}
