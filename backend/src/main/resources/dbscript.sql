create table student(  
id bigint not null primary key,name varchar(100),address varchar(200),is_full_time boolean ,version int);

insert into student values (9,'john','london',true,1);

insert into student values (10,'sam' ,'colombo',false,1)