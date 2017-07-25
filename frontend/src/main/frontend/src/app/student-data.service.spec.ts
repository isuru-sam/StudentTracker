import { TestBed, inject } from '@angular/core/testing';

import { StudentDataService } from './student-data.service';

import {Student} from './student';

describe('StudentDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentDataService]
    });
  });

  it('should be created', inject([StudentDataService], (service: StudentDataService) => {
    expect(service).toBeTruthy();
  }));
  
  
  
  describe('#getAllStudents()', () => {

    it('should return an empty array by default', inject([StudentDataService], (service: StudentDataService) => {
      expect(service.getAllStudents()).toEqual([]);
    }));

    it('should return all students', inject([StudentDataService], (service: StudentDataService) => {
      let student1 = new Student({name: 'John', address:'Colombo', fullTime: false});
       let student2 = new Student({name: 'Sam', address:'Jafna' ,fullTime: true});
      
      service.addStudent(student1);
      service.addStudent(student2);
      expect(service.getAllStudents()).toEqual([student1, student2]);
    }));

  });

  describe('#addStudent(student)', () => {

    it('should automatically assign an incrementing id', inject([StudentDataService], (service: StudentDataService) => {
     let student1 = new Student({name: 'John', address:'Colombo', fullTime: false});
       let student2 = new Student({name: 'Sam', address:'Jafna', fullTime: true});
      service.addStudent(student1);
      service.addStudent(student2);
      expect(service.getStudentById(1)).toEqual(student1);
      expect(service.getStudentById(2)).toEqual(student2);
    }));

  });

  describe('#deleteStudentById(id)', () => {

    it('should remove student with the corresponding id', inject([StudentDataService], (service: StudentDataService) => {
        let student1 = new Student({name: 'John', address:'Colombo', fullTime: false});
       let student2 = new Student({name: 'Sam', address:'Jafna' ,fullTime: true});
      service.addStudent(student1);
      service.addStudent(student2);
      expect(service.getAllStudents()).toEqual([student1, student2]);
      service.deleteStudentById(1);
      expect(service.getAllStudents()).toEqual([student2]);
      service.deleteStudentById(2);
      expect(service.getAllStudents()).toEqual([]);
    }));

    it('should not removing anything if student with corresponding id is not found', inject([StudentDataService], (service: StudentDataService) => {
      let student1 = new Student({name: 'John', address:'Colombo' ,fullTime: false});
       let student2 = new Student({name: 'Sam', address:'Jafna', fullTime: true});
      service.addStudent(student1);
      service.addStudent(student2);
      expect(service.getAllStudents()).toEqual([student1, student2]);
      service.deleteStudentById(3);
      expect(service.getAllStudents()).toEqual([student1, student2]);
    }));

  });

  describe('#updateStudentById(id, values)', () => {

    it('should return student with the corresponding id and updated data', inject([StudentDataService], (service: StudentDataService) => {
       let student1 = new Student({name: 'John', address:'Colombo', fullTime: false});
      service.addStudent(student1);
      let updatedStudent = service.updateStudentById(1, {
        name: 'Donald'
      });
      expect(updatedStudent.name).toEqual('Donald');
    }));

    it('should return null if student is not found', inject([StudentDataService], (service: StudentDataService) => {
    let student2 = new Student({name: 'John', address:'Colombo' ,fullTime: false});
     
      let updatedStudent = service.updateStudentById(2, {
        title: 'Aron'
      });
      expect(updatedStudent).toEqual(null);
    }));

  });
  
  
  
   describe('#toggleStudentFullTime(student)', () => {

    it('should return the updated student with inverse fulltime status', inject([StudentDataService], (service: StudentDataService) => {
      let student1 = new Student({name: 'John', address:'Colombo', fullTime: false});
      service.addStudent(student1);
      let updatedStudent = service.toggleStudentFullTime(student1);
      expect(updatedStudent.fullTime).toEqual(true);
      service.toggleStudentFullTime(student1);
      expect(updatedStudent.fullTime).toEqual(false);
    }));

  });
});
