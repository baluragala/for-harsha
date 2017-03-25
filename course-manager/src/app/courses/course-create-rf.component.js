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
var CourseCreateRFComponet = (function () {
    function CourseCreateRFComponet() {
        // form with 2 controls '
        // 1 title
        // 2 description
        this.courseForm = new forms_1.FormGroup({
            title: new forms_1.FormControl(),
            description: new forms_1.FormControl()
        });
        this.model = {
            title: '',
            description: ''
        };
    }
    CourseCreateRFComponet.prototype.ngDoCheck = function () {
        console.log(this.courseForm);
    };
    CourseCreateRFComponet = __decorate([
        core_1.Component({
            selector: 'rf',
            template: "\n   <form [formGroup]=\"courseForm\" novalidate>\n        <label>Title:</label>\n        <input type=\"text\" name=\"title\" required  fromControlName=\"title\"/>\n        <label>Description:</label>\n        <input type=\"text\" name=\"description\" required fromControlName=\"description\"/>\n        <input type=\"submit\" value=\"Add\"/>\n    </form>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CourseCreateRFComponet);
    return CourseCreateRFComponet;
}());
exports.CourseCreateRFComponet = CourseCreateRFComponet;
//# sourceMappingURL=course-create-rf.component.js.map