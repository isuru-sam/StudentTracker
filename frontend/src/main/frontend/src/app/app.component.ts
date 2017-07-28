import { Component, OnInit, OnDestroy,ViewEncapsulation } from '@angular/core';

import {StudentDataService} from './student-data.service';

import {Student} from './student';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentDataService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  newStudent: Student = new Student();
  saved: boolean = false;
  studentRest: Student[] = [];
  
  constructor(private studentDataService: StudentDataService) {
  }
  
  
  
   ngOnInit(){
      this.saved = false;   
      this.getAllItems();
    }

  private getAllItems(): void {
        this.studentDataService
            .getAllStudentsRest()
            .subscribe((data:Student[]) => this.studentDataService.setInitialStudents(data),
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }
  
  
  
  saveStudentDetails() {
      this.studentDataService
          .save()
          .subscribe(r => console.log('saved!!! '));
    this.saved= true;
    }
  
    ngOnDestroy(){
     
    }
  
   addStudent() {     
   this.saved = false;
    this.studentDataService.addStudent(this.newStudent);
    this.newStudent = new Student();
  }  

  removeStudent(student) {
     this.saved = false;
    this.studentDataService.deleteStudentById(student.id);
  }
  

  get students() {
    console.log('Returning students');
    return this.studentDataService.getAllStudents();
  }
  
}
