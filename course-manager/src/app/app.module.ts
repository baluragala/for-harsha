import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import { AppComponent }  from './app.component';

import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module'
import {CoursesComponent} from './courses/courses.component'
import { HomeComponent} from './home.component';

@NgModule({
  imports:      [ BrowserModule, 
                CoursesModule, 
                SharedModule,
                RouterModule.forRoot( [
                {path: 'home', component: HomeComponent},
                {path:'courses', component: CoursesComponent}
            ])
                ],
  declarations: [ AppComponent,HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
