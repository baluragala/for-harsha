import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
    selector:'rf',
    template:`
   <form [formGroup]="courseForm" novalidate>
        <label>Title:</label>
        <input type="text" name="title" required  fromControlName="title"/>
        <label>Description:</label>
        <input type="text" name="description" required fromControlName="description"/>
        <input type="submit" value="Add"/>
    </form>
    `
})
export class CourseCreateRFComponet {
    // form with 2 controls '
    // 1 title
    // 2 description

    courseForm:FormGroup = new FormGroup({
        title: new FormControl(),
        description: new FormControl()
    });

    model = {
        title:'',
        description:''
    }

    ngDoCheck(){
        console.log(this.courseForm);
    }

}