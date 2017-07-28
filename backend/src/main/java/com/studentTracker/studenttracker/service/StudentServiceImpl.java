package com.studentTracker.studenttracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.studentTracker.studenttracker.jpa.entity.Student;
import com.studentTracker.studenttracker.jpa.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	StudentRepository studentRepository;

	@Override
	@Transactional
	public List<Student> findAllStudents() {
		return studentRepository.findAll();
	}

	@Override
	@Transactional
	public void deleteAll() {
		studentRepository.deleteAll();
	}

	@Override
	@Transactional
	public void insertAllStudents(List<Student> students) {
		studentRepository.save(students);

	}

	@Override
	public void deleteAllAndInsert(List<Student> students) {
		deleteAll();
		insertAllStudents(students);
		
	}

}
