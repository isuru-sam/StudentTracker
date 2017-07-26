package com.studentTracker.studenttracker.service;

import java.util.List;

import com.studentTracker.studenttracker.jpa.entity.Student;

public interface StudentService {

	List<Student> findAllStudents();

	void deleteAll();

	void insertAllStudents(List<Student> students);

}
