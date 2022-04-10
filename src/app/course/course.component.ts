import { Component } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  authors;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }

  onBtnClick($event:Event){
    console.log("button has been clicked");
    console.log($event);
    $event?.stopPropagation();
  }

  onDivClick(){
    console.log("div was click");
  }
    
  onEnterUp(email:any){
    console.log(email);
  }

}
