import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  students: Student[] = StudentsService.getStudents();

}
