import { Injectable } from '@angular/core';
import {Student} from './student';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentDataService {

 // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;
students: Student[] = [];
  
  // Placeholder for Student's
 // students: Observable<Student[]>= Rx.Observable.empty();
   private baseUrl: string = 'http://localhost:8080/api/students/';
  constructor(private http : Http){
  }

  
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
  
  
  getAllStudentsRest(): Observable<Student[]> {
    let student$ = this.http
      .get(this.baseUrl, {headers: this.getHeaders()})
      .map(mapStudents);
   // this.students = student$;
      return student$;
  }
  
private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  // Simulate GET /getStudent/:id
  getStudentById(id: number): Student {
    return this.students
      .filter(student => student.id === id)
      .pop();
  }
  
}
  function mapStudents(response:Response): Student[]{
   // The response of the API has a results
   // property with the actual results
    console.log(response);
        console.log(response.json());
    console.log(response.json().results);
   return response.json().map(toStudent);
}

function toStudent(r:any): Student{
  let student = <Student>({
    id: r.id,
   
    name: r.name,
   });
  console.log('Parsed person:', student);
  return student;
}

