import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }
}
