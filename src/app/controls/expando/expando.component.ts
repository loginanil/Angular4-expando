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
    //if(this.item.name === 'Expando2' || this.item.name === 'Expando50')
    console.log( this.item.name +":"+ this.myFunction() )
    
    //console.timeEnd(this.item.name)

  }
   addZero(x, n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}

 myFunction() {
    var d = new Date();
    
    var h = this.addZero(d.getHours(), 2);
    var m = this.addZero(d.getMinutes(), 2);
    var s = this.addZero(d.getSeconds(), 2);
    var ms = this.addZero(d.getMilliseconds(), 3);
    return h + ":" + m + ":" + s + ":" + ms;
}

}