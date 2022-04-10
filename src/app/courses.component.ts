import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";



@Component({
    selector: 'course',
    template: `
        <h2>{{"title:"+getTitle()}}</h2>
        <ul>
            <li *ngFor="let  course of courses">{{course}}</li>
        </ul>
    `

})
export class CoursesComponent {
    title = "list of courses"
    courses;

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }
    getTitle() {
        return this.title;
    }
}