import {Component,ViewChild} from '@angular/core'
import { NgForm} from '@angular/forms'
@Component({
    selector:'create-course',
    template:`
    <form #addCourseForm="ngForm" (submit)="OnSubmit()" novalidate>
        <label>Title:</label>
        <input type="text" name="title" required [(ngModel)]="title"/>
        <label>Description:</label>
        <input type="text" name="description" required [(ngModel)]="description"/>
        <input type="submit" value="Add"/>
    </form>
    `
})
export class CourseCreateComponent{
    title:string;
    description:string;

    @ViewChild('addCourseForm')
    courseForm:NgForm;

    OnSubmit(){
        alert(this.courseForm.valid)
        console.log('form submitted :', this.title, this.description );
    }
    ngOnChanges(){
        console.log('onchanges');
    }

    ngDoCheck(){
        console.log(this.title);
    }
}
