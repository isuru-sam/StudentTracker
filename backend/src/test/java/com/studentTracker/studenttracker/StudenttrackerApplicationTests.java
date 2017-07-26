package com.studentTracker.studenttracker;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
/*
 * @SpringBootTest
 * 
 * @EnableJpaRepositories("com.studentTracker.studenttracker.jpa.repository")
 * 
 * @EntityScan("com.studentTracker.studenttracker.jpa.entity")
 * 
 * @EnableTransactionManagement
 * 
 * @PropertySource("classpath:application.properties")
 */
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)

public class StudenttrackerApplicationTests {

	@Test
	public void contextLoads() {
	}

}
