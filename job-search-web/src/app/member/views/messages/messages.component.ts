import { Component, OnInit } from '@angular/core';

declare let $: any

@Component({
  templateUrl: './messages.component.html',
  styles: [
  ]
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.ui.dropdown').dropdown()
  }

}
