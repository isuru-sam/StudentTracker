package com.studentTracker.studenttracker.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studentTracker.studenttracker.jpa.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
