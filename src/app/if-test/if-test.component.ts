import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-test',
  templateUrl: './if-test.component.html',
  styleUrls: ['./if-test.component.css']
})
export class IfTestComponent implements OnInit {
  courses = [];

  constructor() { }

  ngOnInit(): void {
  }

}
