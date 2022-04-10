import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.css']
})
export class TitleInputComponent implements OnInit {
  title = "";

  constructor() { }

  ngOnInit(): void {
  }

}
