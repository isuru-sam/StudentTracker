This is end to end flowing , backend Spring Rest API and  frontend angular2 based application.

Technologies used
1.Angular2
2.Spring-Boot
3.Rest services
4.JPA
5.Postgres db
6.Maven build

Setps to run
1.Download https://github.com/isuru-sam/StudentTracker
2.Install postgres locally create database 'Student' and run the dbscript.sql in src/main/resources in backend folder
3.Modify backend src/main/resources/application.properties with db properties
4.From home directiory type mvn clean install(Have maven installed)
5.cd backend
6.mvn spring-boot:run
7.Access http://localhost:8080

Angular2/Spring boot Rest API  

Front end UI
1.Add student name and press enter it will be added to the list
2.Multiple students can be added in that fashion
3.On the updatable textfield name can be updated and backend angular model is updated accordingly.
4.Delete button removes a student from the model
5.SaveAll button  will calla Rest API and save data to the database

Rest apis can be accessed seperately 
1.http://localhost:8080/api/students   (List all students in json format)
