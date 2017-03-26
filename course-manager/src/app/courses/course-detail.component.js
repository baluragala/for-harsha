"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var course_service_1 = require('./course.service');
var router_1 = require('@angular/router');
var CourseDetailComponent = (function () {
    function CourseDetailComponent(courseService, router, currentRoute) {
        this.courseService = courseService;
        this.router = router;
        this.currentRoute = currentRoute;
    }
    CourseDetailComponent.prototype.gotoCourses = function () {
        this.router.navigate(['/courses']);
    };
    CourseDetailComponent.prototype.ngOnInit = function () {
        console.log(this.currentRoute);
        this.course = this.courseService.getCourseById(parseInt(this.currentRoute.snapshot.params.cid));
        console.log(this.course);
    };
    CourseDetailComponent = __decorate([
        core_1.Component({
            template: "\n    <label>Title:\n        {{course?.courseTitle}}\n        <input type=\"button\" value=\"Courses\" (click)=\"gotoCourses()\"/>\n    </label>    \n    "
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, router_1.Router, router_1.ActivatedRoute])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
exports.CourseDetailComponent = CourseDetailComponent;
//# sourceMappingURL=course-detail.component.js.map