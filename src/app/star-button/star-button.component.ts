import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-star-button',
  templateUrl: './star-button.component.html',
  styleUrls: ['./star-button.component.css']
})
export class StarButtonComponent {
  @Input('is-activated') isActivated = false;

  constructor() { }

  onBtnClick() {
    this.isActivated = !this.isActivated;
  }

}
