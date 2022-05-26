import { Component } from '@angular/core';
import { Student } from './models/Student';

import studentsData from './students.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personal';
  students: Student[] = studentsData;
}
