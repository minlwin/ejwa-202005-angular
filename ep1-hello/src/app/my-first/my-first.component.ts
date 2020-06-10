import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent implements OnInit {

  message: string = "Hello from my first component"

  list: string[] = ["Java", "Spring", "Typescript", "Angular", "Android"]

  constructor() { }

  ngOnInit(): void {
  }

}
