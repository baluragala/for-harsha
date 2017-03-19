import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module'

@NgModule({
  imports:      [ BrowserModule, CoursesModule, SharedModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
