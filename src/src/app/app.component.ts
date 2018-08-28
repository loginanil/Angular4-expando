import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent   {
  
                      
 


  private row = { cols: [ 
      {
        item: {          
          bwItemType:"EXPANDO",
          name: 'Expando1',
          rows:[]
          
        }
      }
  ]};
  getExpandoRow = function(base, num:number) {  
    let arr ;
    if( num > 0) {
      if(num != 1) {
      arr = base['rows'] = [ 
            {
              cols: [ 
                      {
                        item: {          
                          bwItemType:"EXPANDO",
                          name: 'Expando' + num,
                          
                            }
                        }                      
                    ]
            } 
          ] 
           this.getExpandoRow(base['rows'][0]['cols'][0]['item'], num - 1)
    } else {
      base["rows"] = [  
                              { cols: [ 
                                { 
                                item: { bwItemType:"TEXTBOX"}
                                }
                              ]
                            }
                            ]

    }
     
      return arr;

    } else {
      return arr;

    }

  }

  public grid =  { rows: [ 
    this.row
  ]}; 

  

  constructor(){
    this.grid = { rows:  
    this.getExpandoRow({}, 2)
  }; 
  }

  
  name = 'Angular';
}

class Row {
    rowNumber?: number;
    colCount?: number;
    cols?: RowColumn[];
    maxRunCount?: number;
    isRowEmpty = true;
    containsHorizontalLine = false;
    topMargin: number;
    constructor(rowobj: any) {
        this.rowNumber = rowobj.rowNumber;
        this.colCount = rowobj.colCount;
        this.cols = rowobj.cols;
        this.maxRunCount = rowobj.maxRunCount;
    }
}

export class RowColumn {
    colNumber: number;
    colClass?: string;
    item?: any;
    hide?: boolean
    constructor(rowColumnobj: any) {
        this.colNumber = rowColumnobj.colNumber;
        this.colClass = rowColumnobj.colClass;
        this.item = rowColumnobj.item;
        this.hide = rowColumnobj.hide;
    }
}
