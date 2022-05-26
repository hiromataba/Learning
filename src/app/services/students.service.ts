import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import studentsData from '../students.json';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  static getStudents(): Student[] {
    return studentsData;
  }

  constructor() {}
}
