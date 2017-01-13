import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'student',
  template: `
  <div class="student" *ngIf="student">
    <p>编号：{{ student.id }}</p>
    <p>姓名：{{ student.name }}</p>
  </div>
  `,
  styles: [`
    .student {
      width: 90%;
      margin: 0 auto;
      margin-top: 60px;
      background: #fff;
      text-align: center;
      padding: 30px;
      border: 1px solid #ddd;
    }
  `]
})

export class StudentComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  student: Student;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.student = this.studentService.get(id);
    });
  }
}
