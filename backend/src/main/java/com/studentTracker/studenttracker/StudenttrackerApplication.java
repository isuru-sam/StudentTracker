package com.studentTracker.studenttracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
 
//@SpringBootApplication        
@EnableJpaRepositories("com.studentTracker.studenttracker.jpa.repository")
@PropertySource("classpath:application.properties")
public class StudenttrackerApplication {
	public static void main(String[] args) {
		SpringApplication.run(StudenttrackerApplication.class, args);
	}
}
