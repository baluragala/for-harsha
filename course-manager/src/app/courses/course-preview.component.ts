import { Component, Input, EventEmitter, Output} from '@angular/core'

@Component({
    selector:'course-preview',
    templateUrl:'app/courses/course-preview.component.html',
    styles:['.low { color:blue}','.high {color:red}']
})
export class CoursePreviewComponent {
    @Input() course:any;
    @Input() showImages:Boolean;
    @Output() courseClickedEvent: EventEmitter<string> =
        new EventEmitter<string>();

    courseClicked(e:any){
        this.course.courseTitle = this.course.courseTitle + ' clicked!!!';
        this.courseClickedEvent.emit(`${this.course.courseTitle} - this is from child`);
        console.log(e);
    }

    getColor(){
        return this.course.price > 600 ? "red" : "blue";
    }

    getClassName(){
        return this.course.price > 600 ? "low" : "high";
    }
}