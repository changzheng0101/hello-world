import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  CategoryOptions = [
    { id: 1, name: 'development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'language' },
  ];

  onSubmit(f: NgForm) {
    console.log(f);
  }

}
