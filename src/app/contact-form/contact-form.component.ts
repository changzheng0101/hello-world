import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethod = [
    { id: 1, name: "email" },
    { id: 2, name: "phone" }
  ];

  onChange(firstName: NgModel) {
    console.log(firstName);
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }


}
