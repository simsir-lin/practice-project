import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stu-manager',
  template: `
  <div class="nav"><a routerLink="/students">学生列表</a></div>
  <router-outlet></router-outlet>
  `,
  styles: [`
  `]
})

export class AppComponent implements OnInit {
  title = '学生管理';

  ngOnInit(): void {
  }
}
