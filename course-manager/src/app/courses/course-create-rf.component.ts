import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
    selector:'rf',
    template:`
   <form [formGroup]="courseForm" (submit)="OnSubmit()">
        <label>Title:</label>
        <input type="text" name="title" formControlName="title"/>
        <p *ngIf="courseForm.controls.title.errors">Title is required</p>
        <label>Description:</label>
        <input type="text" name="description" required formControlName="description"/>
        <label>category:</label>
        <select formControlName="category">
            <option value="Machine Learning">Machine Learning</option>
            <option value="Web">Web</option>
            <option value="Mobile">Mobile</option>
        </select>
        <input type="submit" value="Add"/>
    </form>
    `
})
export class CourseCreateRFComponet implements OnInit{
    // form with 2 controls '
    // 1 title
    // 2 description
    courseForm:FormGroup

    constructor(private formBuilder: FormBuilder){

    }

    ngOnInit(){
        // this.courseForm = new FormGroup({
        //     title: new FormControl('angular 2', Validators.required),
        //     description: new FormControl('Beginners guide'),
        //     category: new FormControl('Machine Learning')
        // });
        this.courseForm = this.formBuilder.group({
            title:['',Validators.required],
            description:'',
            category:''
        })
        this.courseForm.patchValue({
            title:'Android',
            description:'Mobile Deve',
            category:'Mobile'
        })
        console.log(this.courseForm);
    }

    OnSubmit(){
        console.log(this.courseForm);
    }

    model = {
        title:'',
        description:'',
        category:''
    }
}