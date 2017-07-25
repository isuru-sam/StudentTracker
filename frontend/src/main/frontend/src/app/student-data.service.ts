import { Injectable } from '@angular/core';
import {Student} from './student';
@Injectable()
export class StudentDataService {

 // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for Student's
  students: Student[] = [];
  
  constructor() { }

  
    // Simulate POST /addStudent
  addStudent(student: Student): StudentDataService {
    if (!student.id) {
      student.id = ++this.lastId;
    }
    this.students.push(student);
    return this;
  }

  // Simulate DELETE /deleteStudent/:id
  deleteStudentById(id: number): StudentDataService {
    this.students = this.students
      .filter(student => student.id !== id);
    return this;
  }

  // Simulate PUT /updateStudent/:id
  updateStudentById(id: number, values: Object = {}): Student {
    let student = this.getStudentById(id);
    if (!student) {
      return null;
    }
    Object.assign(student, values);
    return student;
  }

  // Simulate GET /students
  getAllStudents(): Student[] {
    return this.students;
  }

  // Simulate GET /getStudent/:id
  getStudentById(id: number): Student {
    return this.students
      .filter(student => student.id === id)
      .pop();
  }
  
  // Toggle todo complete
  toggleStudentFullTime(student: Student){
    let updatedStudent = this.updateStudentById(student.id, {
      fullTime: !student.fullTime
    });
    return updatedStudent;
  }

}
