import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'students',
  template: `
  <div class="students">
    <ul>
      <li (click)="onClick(student)" *ngFor="let student of students">{{ student.name }}</li>
    </ul>
  </div>
  `,
  styles: [`
    .students ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 90%;
      margin: 0 auto;
      margin-top: 30px;
    }
    .students li {
      display: block;
      width: 120px;
      height: 120px;
      line-height: 120px;
      text-align: center;
      background: #fff;
      margin: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      transition: all 0.2s;
    }
    .students li:hover {
      box-shadow: 0 9px 30px -6px rgba(0,0,0,.2),0 18px 20px -10px rgba(0,0,0,.04),0 18px 20px -10px rgba(0,0,0,.04),0 10px 20px -10px rgba(0,0,0,.04);
      cursor: pointer;
    }
  `]
})

export class StudentsComponent implements OnInit {
  students: Student[];
  selectedStudent: Student;

  constructor(private stuService: StudentService, private router: Router) { }

  onClick(stu: Student): void {
    let link = ['/students', stu.id];
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.students = this.stuService.getAll();
  }
}
