import { Component,OnInit } from '@angular/core'
import { Course } from './course';
import { CourseService} from './course.service'

@Component({
  selector:'course-list',
  templateUrl:'app/courses/courses.component.html'
})
export class CoursesComponent implements OnInit {
  
  constructor(private courseService:CourseService){}
 
  ngOnInit(){
      this.courses = this.courseService.getCourses();
  }
 
  showImages=true;
  condition=false;
  /*courseAndroid={
        "courseId": 1,
        "courseTitle": "Android Development",
        "courseCode": "ZL-0500",
        "releaseDate": "March 19, 2016",
        "description": "The Android operating system is the world’s most popular mobile platform. The proliferation of smartphones and the popularity of the Android platform have meant that there is a huge requirement for developers who can develop apps on Android OS. With over 1 billion Android devices already activated, this represents a great opportunity for developers.ZeoLearn’s training on Android App development will not only give you knowledge of the bare essentials but also a detailed end-to-end understanding of design and implementation. You will learn the basics of developing apps on the Android Platform, and get practical, hands-on knowledge in getting started with the various tools and concepts, principles and patterns, required in developing ready to market Android apps.",
        "price": 600,
        "rating": 3.2,
        "courseImageUrl": "http://images.dailytech.com/frontpage/fp__android-logo-100x100.gif"
    }
    courseAngular={
        "courseId": 2,
        "courseTitle": "ANGULAR JS 2.0",
        "courseCode": "ZL-0623",
        "releaseDate": "March 18, 2016",
        "description": "AngularJS 2.0 is a solution for rapid front-end development. It is easy to grasp and enables one to develop robust applications for projects of any scale. Part of its popularity is its ability to make static Web pages more dynamic thus allowing web designers to add more tools. Organizations are seeing the benefits of adopting Angular js and this has increased the demand for Angular experts.",
        "price": 700,
        "rating": 4.2,
        "courseImageUrl": "https://angular.io/resources/images/logos/angular2/angular.svg"
    },
    courseBackbone={
        "courseId": 3,
        "courseTitle": "BACKBONE.JS",
        "courseCode": "ZL-0628",
        "releaseDate": "May 21, 2016",
        "description": "Zeolearn’s course on Backbone.js is a comprehensive and intensive course that will allow you to gain the knowledge required to build Rich Internet Applications (RIA) using JavaScript and Backbone.js.  Through hands on practical exercises and extensive code prep you will learn about models and collections, views and event driven user interfaces and other aspects of Backbone.js to build complex client side applications. Learn this framework today and understand how to write code that is easily maintainable, scalable and manipulated to build rich internet applications.",
        "price": 400,
        "rating": 4.8,
        "courseImageUrl": "http://backbonejs.org/docs/images/backbone.png"
    }*/

    courses:Array<Course> = [];

childMessage='';

courseClicked(e:any){
  this.childMessage=e;
  console.log(e);
}
  
}