import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { ExamplesComponent } from './examples/examples.component';
import { List2Component } from './list2/list2.component';
import { Item2Component } from './list2/item2/item2.component';
import { LabelComponent } from './list2/item2/label.component';
import { List3Component } from './list3/list3.component';
import { Item3Component } from './list3/item3/item3.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    ExamplesComponent,
    List2Component,
    Item2Component,
    LabelComponent,
    List3Component,
    Item3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
