import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoursesComponent } from './courses.component'
import { CoursePreviewComponent} from './course-preview.component'

@NgModule({
  imports:[BrowserModule],
  declarations:[CoursesComponent,CoursePreviewComponent],
  exports:[CoursesComponent]
})
export class CoursesModule{ }