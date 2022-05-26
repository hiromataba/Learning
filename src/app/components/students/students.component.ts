import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student';
import studentsData from '../../students.json';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  constructor() {}

  students: Student[] = studentsData;

  ngOnInit(): void {}
}
