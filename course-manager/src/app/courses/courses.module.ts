import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router'

import { CoursesComponent } from './courses.component'
import { CoursePreviewComponent} from './course-preview.component'
import {CourseService} from './course.service'
import { CourseCreateComponent} from './course-create.component'
import { CourseCreateRFComponet} from './course-create-rf.component'
import { CourseDetailComponent} from './course-detail.component'
import { CourseDetailGuard} from './course-detail-gaurd'

@NgModule({
  imports:[BrowserModule, FormsModule, ReactiveFormsModule, 
  RouterModule.forChild([
    {path:"courses/:cid", component:CourseDetailComponent, canActivate:[CourseDetailGuard]}
  ])],
  declarations:[CourseDetailComponent, CoursesComponent,CoursePreviewComponent,CourseCreateComponent,CourseCreateRFComponet],
  providers:[CourseService, CourseDetailGuard],
  exports:[CoursesComponent, CourseCreateComponent,CourseCreateRFComponet]
})
export class CoursesModule{ }