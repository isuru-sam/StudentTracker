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
		List<Student> students = studentRepository.findAll();
		long counter = 1;
		for (Student student : students) {
			student.setTrackingId(counter++);
		}

		return students;

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
	@Transactional
	public void deleteAllAndInsert(List<Student> students) {
		deleteAll();
		insertAllStudents(students);

	}

}
