import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  onFirstNameChange = (event: any) => {
    console.log(event.value);
  };

  constructor() {}

  ngOnInit(): void {}
}
