import { Injectable } from '@angular/core';

import { Student } from './student';
import { STUDENTS } from './mock-students';

@Injectable()
export class StudentService {
  getAll(): Student[] {
    return STUDENTS;
  }

  get(id: number): Student {
    return STUDENTS.find(Student => Student.id === id);
  }
}
