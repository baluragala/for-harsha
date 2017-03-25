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
var forms_1 = require('@angular/forms');
var CourseCreateComponent = (function () {
    function CourseCreateComponent() {
    }
    CourseCreateComponent.prototype.OnSubmit = function () {
        alert(this.courseForm.valid);
        console.log('form submitted :', this.title, this.description);
    };
    CourseCreateComponent.prototype.ngOnChanges = function () {
        console.log('onchanges');
    };
    CourseCreateComponent.prototype.ngDoCheck = function () {
        console.log(this.title);
    };
    __decorate([
        core_1.ViewChild('addCourseForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], CourseCreateComponent.prototype, "courseForm", void 0);
    CourseCreateComponent = __decorate([
        core_1.Component({
            selector: 'create-course',
            template: "\n    <form #addCourseForm=\"ngForm\" (submit)=\"OnSubmit()\" novalidate>\n        <label>Title:</label>\n        <input type=\"text\" name=\"title\" required [(ngModel)]=\"title\"/>\n        <label>Description:</label>\n        <input type=\"text\" name=\"description\" required [(ngModel)]=\"description\"/>\n        <input type=\"submit\" value=\"Add\"/>\n    </form>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CourseCreateComponent);
    return CourseCreateComponent;
}());
exports.CourseCreateComponent = CourseCreateComponent;
//# sourceMappingURL=course-create.component.js.map