import { Component } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  authors;
  name: string | null = "test name";
  course = {
    title: "The hello",
    rating: 4.952,
    students: 465456,
    price: 128,
    releaseData: new Date(2022, 4, 10)
  }

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }

  onBtnClick($event: Event) {
    console.log("button has been clicked");
    console.log($event);
    $event?.stopPropagation();
  }

  onDivClick() {
    console.log("div was click");
  }

  onEnterUp(email: any) {
    console.log(email);
  }

  onNameClick() {
    console.log(this.name);
  }

}
