import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

declare let $: any

@Component({
  selector: 'ui-dropdown',
  templateUrl: './dropdown.component.html',
  styles: [
  ]
})
export class DropdownComponent implements AfterViewInit {

  @Input()
  list: string[]
  @Input()
  control: FormControl
  @Input()
  name: string

  @ViewChild("dropdown", { static: true })
  dropdown: ElementRef

  constructor() { }

  ngAfterViewInit(): void {
    $(this.dropdown.nativeElement).dropdown()
  }

}
