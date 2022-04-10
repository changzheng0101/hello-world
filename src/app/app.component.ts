import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  post = {
    title: "is title",
    isActivated: true
  }

  onChange() {
    console.log("onchange run .....");

  }
}
