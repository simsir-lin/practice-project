import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './student/students.component';
import { StudentService } from './student/student.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    StudentComponent,
    StudentsComponent
  ],
  providers: [ StudentService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
