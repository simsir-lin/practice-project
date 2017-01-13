import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }      from './app.component';
import { StudentComponent }      from './student/student.component';
import { StudentsComponent }      from './student/students.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'students/:id',
    component: StudentComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
