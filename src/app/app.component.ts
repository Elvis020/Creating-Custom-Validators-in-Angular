import { AdminName } from './custom-validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  elvisForms: FormGroup;
  // forbiddenName = ['Test'];

  constructor() {
  }



  ngOnInit() {
    this.elvisForms = new FormGroup({
      name: new FormControl('', [Validators.required, AdminName.InvalidName], AdminName.AsyncInvalidProjectName),
      mail: new FormControl('', [Validators.required, Validators.email]),
      status: new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.elvisForms.value);
    this.elvisForms.reset();
  }



}
