import { Component } from "@angular/core";



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
    courses = ['course1', 'course2', 'course3'];

    getTitle() {
        return this.title;
    }
}