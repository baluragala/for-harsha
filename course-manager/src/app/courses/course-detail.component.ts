import { Component, OnInit} from '@angular/core'
import { CourseService} from './course.service'
import { Course} from './course'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    template:`
    <label>Title:
        {{course?.courseTitle}}
        <input type="button" value="Courses" (click)="gotoCourses()"/>
    </label>    
    `
})
export class CourseDetailComponent implements OnInit {

    course:Course;
    constructor(private courseService:CourseService,
    private router:Router,
    private currentRoute: ActivatedRoute
    ){

    }

    gotoCourses(){
        this.router.navigate(['/courses']);
    }

    ngOnInit(){
        console.log(this.currentRoute);
        this.course = this.courseService.getCourseById(parseInt(this.currentRoute.snapshot.params.cid));
        console.log(this.course);
    }
}