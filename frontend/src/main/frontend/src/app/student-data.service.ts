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
  
   setInitialStudents(istudents: Student[]): StudentDataService {
   this.students= istudents;
   this.lastId= istudents.length;   
     return this;
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
   headers.append('Content-Type', 'application/json');
    return headers;
  }
  // Simulate GET /getStudent/:id
  getStudentById(id: number): Student {
    return this.students
      .filter(student => student.id === id)
      .pop();
  }
  
  
  
  save() : Observable<Response>{    
    return this
      .http
      .post(this.baseUrl,
            JSON.stringify(this.students),
            {headers: this.getHeaders()});
  }
  
}
  function mapStudents(response:Response): Student[]{
   // The response of the API has a results
   // property with the actual results
    console.log(response);   
   return response.json().map(toStudent);
}

function toStudent(r:any): Student{
  let student = <Student>({
    dbId: r.id,   
    name: r.name,
    id:r.trackingId
   });
  console.log('Parsed student:', student);
  return student;
}

