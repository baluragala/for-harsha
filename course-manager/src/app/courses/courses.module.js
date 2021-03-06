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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var courses_component_1 = require('./courses.component');
var course_preview_component_1 = require('./course-preview.component');
var course_service_1 = require('./course.service');
var course_create_component_1 = require('./course-create.component');
var course_create_rf_component_1 = require('./course-create-rf.component');
var course_detail_component_1 = require('./course-detail.component');
var course_detail_gaurd_1 = require('./course-detail-gaurd');
var CoursesModule = (function () {
    function CoursesModule() {
    }
    CoursesModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild([
                    { path: "courses/:cid", component: course_detail_component_1.CourseDetailComponent, canActivate: [course_detail_gaurd_1.CourseDetailGuard] }
                ])],
            declarations: [course_detail_component_1.CourseDetailComponent, courses_component_1.CoursesComponent, course_preview_component_1.CoursePreviewComponent, course_create_component_1.CourseCreateComponent, course_create_rf_component_1.CourseCreateRFComponet],
            providers: [course_service_1.CourseService, course_detail_gaurd_1.CourseDetailGuard],
            exports: [courses_component_1.CoursesComponent, course_create_component_1.CourseCreateComponent, course_create_rf_component_1.CourseCreateRFComponet]
        }), 
        __metadata('design:paramtypes', [])
    ], CoursesModule);
    return CoursesModule;
}());
exports.CoursesModule = CoursesModule;
//# sourceMappingURL=courses.module.js.map