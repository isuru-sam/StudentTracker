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
studentRest: Student[] = [];
  constructor(private studentDataService: StudentDataService) {
  }
  
  
  
   ngOnInit(){
      this.getAllItems();
    }

  private getAllItems(): void {
        this.studentDataService
            .getAllStudentsRest()
            .subscribe((data:Student[]) => this.studentRest = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }
  
  
    ngOnDestroy(){
      //  this.sub.unsubscribe();
    }
  
  
 
  
   addStudent() {
    this.studentDataService.addStudent(this.newStudent);
    this.newStudent = new Student();
  }

  

  removeStudent(student) {
    this.studentDataService.deleteStudentById(student.id);
  }
  
 

  get students() {
    console.log('Retuening students'+this.studentRest);
    return this.studentRest;
  }
  
}
