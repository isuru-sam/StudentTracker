package com.studentTracker.studenttracker.restcontroller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.studentTracker.studenttracker.jpa.entity.Student;
import com.studentTracker.studenttracker.service.StudentService;

@RestController
@RequestMapping("/api")
public class StudentRestApiController {
	public static final Logger logger = Logger.getLogger(StudentRestApiController.class);

	@Autowired
	StudentService studentService;

	@RequestMapping(value = "/students/", method = RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Student>> listAllStudents() {
		List<Student> students = studentService.findAllStudents();
		logger.info("Retrieving students" + students);
		if (students.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);

		}
		return new ResponseEntity<List<Student>>(students, HttpStatus.OK);
	}

	@RequestMapping(value = "/students/", method = RequestMethod.POST)
	public ResponseEntity<?> createStudents(@RequestBody List<Student> students) {
		logger.info("Creating Students :" + students);
		studentService.deleteAll();
		studentService.insertAllStudents(students);
		return listAllStudents();
	}

}
