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
var CoursePreviewComponent = (function () {
    function CoursePreviewComponent() {
        this.courseClickedEvent = new core_1.EventEmitter();
    }
    CoursePreviewComponent.prototype.courseClicked = function (e) {
        this.course.courseTitle = this.course.courseTitle + ' clicked!!!';
        this.courseClickedEvent.emit(this.course.courseTitle + " - this is from child");
        console.log(e);
    };
    CoursePreviewComponent.prototype.getColor = function () {
        return this.course.price > 600 ? "red" : "blue";
    };
    CoursePreviewComponent.prototype.getClassName = function () {
        return this.course.price > 600 ? "low" : "high";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CoursePreviewComponent.prototype, "course", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CoursePreviewComponent.prototype, "showImages", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CoursePreviewComponent.prototype, "courseClickedEvent", void 0);
    CoursePreviewComponent = __decorate([
        core_1.Component({
            selector: 'course-preview',
            templateUrl: 'app/courses/course-preview.component.html',
            styles: ['.low { color:blue}', '.high {color:red}']
        }), 
        __metadata('design:paramtypes', [])
    ], CoursePreviewComponent);
    return CoursePreviewComponent;
}());
exports.CoursePreviewComponent = CoursePreviewComponent;
//# sourceMappingURL=course-preview.component.js.map