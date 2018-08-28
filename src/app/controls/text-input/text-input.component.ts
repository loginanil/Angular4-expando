import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Input() item: any

  constructor() { }

  ngOnInit() {
  }
  keydown(event) {
    //console.time('')
  }

}