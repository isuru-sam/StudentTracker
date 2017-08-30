package com.studentTracker.studenttracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@EnableJpaRepositories("com.studentTracker.studenttracker.jpa.repository")
//@PropertySource("classpath:application.properties")
public class StudenttrackerApplicationWeb extends SpringBootServletInitializer {

	 @Override
	    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	        return application.sources(StudenttrackerApplicationWeb.class);
	    }
	 
	    public static void main(String[] args) {
	        SpringApplication.run(StudenttrackerApplicationWeb.class, args);
	    }

}
