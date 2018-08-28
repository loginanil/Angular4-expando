import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GridComponent } from './controls/grid/grid.component';
import { ExpandoComponent } from './controls/expando/expando.component';
import { TextInputComponent } from './controls/text-input/text-input.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GridComponent, ExpandoComponent, TextInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
