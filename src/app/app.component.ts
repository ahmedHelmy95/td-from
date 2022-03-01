import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'td-form-app';
  submitted: boolean = false;
  subscriptions = ['basic', 'advanced', 'pro'];
  @ViewChild('f') formData: NgForm;
  userData = {
    mail: '',
    subscription: '',
    password: '',
  };

  submit() {
    console.log(this.formData);

    this.userData.mail = this.formData.form.value.mail;
    this.userData.subscription = this.formData.form.value.subscription;
    this.userData.password = this.formData.form.value.password;
    this.submitted = true;
    this.formData.reset();
  }
}
