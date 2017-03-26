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
    function CourseCreateRFComponet(formBuilder) {
        this.formBuilder = formBuilder;
        this.model = {
            title: '',
            description: '',
            category: ''
        };
    }
    CourseCreateRFComponet.prototype.ngOnInit = function () {
        // this.courseForm = new FormGroup({
        //     title: new FormControl('angular 2', Validators.required),
        //     description: new FormControl('Beginners guide'),
        //     category: new FormControl('Machine Learning')
        // });
        this.courseForm = this.formBuilder.group({
            title: ['', forms_1.Validators.required],
            description: '',
            category: ''
        });
        this.courseForm.patchValue({
            title: 'Android',
            description: 'Mobile Deve',
            category: 'Mobile'
        });
        console.log(this.courseForm);
    };
    CourseCreateRFComponet.prototype.OnSubmit = function () {
        console.log(this.courseForm);
    };
    CourseCreateRFComponet = __decorate([
        core_1.Component({
            selector: 'rf',
            template: "\n   <form [formGroup]=\"courseForm\" (submit)=\"OnSubmit()\">\n        <label>Title:</label>\n        <input type=\"text\" name=\"title\" formControlName=\"title\"/>\n        <p *ngIf=\"courseForm.controls.title.errors\">Title is required</p>\n        <label>Description:</label>\n        <input type=\"text\" name=\"description\" required formControlName=\"description\"/>\n        <label>category:</label>\n        <select formControlName=\"category\">\n            <option value=\"Machine Learning\">Machine Learning</option>\n            <option value=\"Web\">Web</option>\n            <option value=\"Mobile\">Mobile</option>\n        </select>\n        <input type=\"submit\" value=\"Add\"/>\n    </form>\n    "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], CourseCreateRFComponet);
    return CourseCreateRFComponet;
}());
exports.CourseCreateRFComponet = CourseCreateRFComponet;
//# sourceMappingURL=course-create-rf.component.js.map