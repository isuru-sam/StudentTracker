import { Component } from '@angular/core';

import {StudentDataService} from './student-data.service';

import {Student} from './student';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentDataService]
})
export class AppComponent {
  title = 'app';
   newStudent: Student = new Student();

  constructor(private studentDataService: StudentDataService) {
  }
  
  // Service is now available as this.studentDataService
  toggleStudentFullTime(student) {
    this.studentDataService.toggleStudentFullTime(student);
  }
  
  
   addStudent() {
    this.studentDataService.addStudent(this.newStudent);
    this.newStudent = new Student();
  }

  

  removeStudent(student) {
    this.studentDataService.deleteStudentById(student.id);
  }
  
 

  get students() {
    return this.studentDataService.getAllStudents();
  }
  
}
