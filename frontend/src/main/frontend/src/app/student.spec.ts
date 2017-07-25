import {Student} from './student';

describe('Student', () => {
  it('should create an instance', () => {
    expect(new Student()).toBeTruthy();
  });



it('should accept values in the constructor', () => {
    let student = new Student({
      name: 'John',
      address: 'Colombo'
    });
    expect(student.name).toEqual('John');
    expect(student.address).toEqual('Colombo');
  });
});