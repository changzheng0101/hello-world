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

  tweet = {
    body:' some title',
    isLiked:false,
    likeCount:0
  }

  post = {
    title: "is title",
    isActivated: true
  }

  onChange(isActivated:changeEvent) {
    console.log("onchange run .....", isActivated.status);

  }
}
