import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, } from '@angular/forms';

@Component({
  selector: 'MyComponents',
  templateUrl: './compoents-new.component.html',
  styleUrls: ['./compoents-new.component.css']
})
export class CompoentsNewComponent implements OnInit {



  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.max(64),
      Validators.min(4),
      Validators.email
    ]),
    lasname: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  all: Array<any>;

  constructor(

  ) {
    this.all = [];
  }

  ngOnInit(): void {

  }

  onSubmit() {


    if (this.all.length === 0) {
      this.all = [this.profileForm.value];

    } else {
      this.all = [
        ...this.all,
        this.profileForm.value
      ];
    }

    console.log(this.profileForm.value)

    this.profileForm.reset();
  }

  delec(i: number) {
    this.all.splice(i, 1)
  }

}
