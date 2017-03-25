import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component'
import { CoursePreviewComponent} from './course-preview.component'
import {CourseService} from './course.service'
import { CourseCreateComponent} from './course-create.component'
import { CourseCreateRFComponet} from './course-create-rf.component'

@NgModule({
  imports:[BrowserModule, FormsModule, ReactiveFormsModule],
  declarations:[CoursesComponent,CoursePreviewComponent,CourseCreateComponent,CourseCreateRFComponet],
  providers:[CourseService],
  exports:[CoursesComponent, CourseCreateComponent,CourseCreateRFComponet]
})
export class CoursesModule{ }