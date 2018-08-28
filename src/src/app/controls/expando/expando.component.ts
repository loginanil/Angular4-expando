import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-expando',
  templateUrl: './expando.component.html',
  styleUrls: ['./expando.component.css']
})
export class ExpandoComponent implements OnInit, DoCheck {

@Input() item:any;
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck(){
    console.log(this.item.name)

  }

}