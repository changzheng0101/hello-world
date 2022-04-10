import { Component } from '@angular/core';
import { changeEvent } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  viewModel = 'map';

  courses: any;

  tweet = {
    body: ' some title',
    isLiked: false,
    likeCount: 0
  }

  post = {
    title: "is title",
    isActivated: true
  }

  downloadData() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ];
  }

  /**
   * 只要id不变 这个就不会更新
   * @param index 
   * @param course 
   * @returns 
   */
  trackById(index:number, course:any) {
    return course ? course.id : undefined;
  }

  onChange(isActivated: changeEvent) {
    console.log("onchange run .....", isActivated.status);
  }

  addCourse() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  remove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
