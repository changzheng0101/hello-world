import { Component } from '@angular/core';
import { changeEvent } from './app.module';

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

  onChange(isActivated:changeEvent) {
    console.log("onchange run .....", isActivated.status);

  }
}
