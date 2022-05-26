import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  onFirstNameChange = (event: any) => {
    console.log(event.control);
  };

  onSubmit(firstName: any, comment: any) {
    firstName.reset();
    comment.reset();
    console.log(
      `Welcome ${firstName.value}! Your comment is: ${comment.value}`
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
