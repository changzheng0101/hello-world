import { Component, EventEmitter, Input, Output } from '@angular/core';

//EventEmitter注意从哪里引入的
@Component({
  selector: 'app-star-button',
  templateUrl: './star-button.component.html',
  styleUrls: ['./star-button.component.css']
})
export class StarButtonComponent {
  @Input('is-activated') isActivated = false;
  @Output() change = new EventEmitter()

  constructor() { }

  onBtnClick() {
    this.isActivated = !this.isActivated;
    this.change.emit();
  }

}
