import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { oldPassword } from './oldPassword.validators';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent {
  form: FormGroup = new FormGroup({
    oldPassword: new FormControl('', Validators.required, oldPassword.passwordCorrect),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })


  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }


}