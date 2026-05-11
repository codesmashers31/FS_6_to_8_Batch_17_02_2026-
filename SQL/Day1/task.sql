CREATE DATABASE companyDB;

use companyDB;

CREATE TABLE emp (

emp_id int primary key auto_increment,
name varchar(20),
email varchar(30),
department varchar(20),
salary float,
city varchar(20),
created_at datetime
); 



insert into emp (name,email,department,salary,city,created_at) values 
(upper('bala'),lower('BALA@gmail.com'),'IT',round(300098.65),'Chennai',now()),
(upper('arun'),lower('ARUN@yahoo.com'),'HR',round(450000.75),'Bangalore',now()),
(upper('kavin'),lower('KAVIN@hotmail.com'),'Finance',round(520340.40),'Hyderabad',now()),
(upper('meena'),lower('MEENA@gmail.com'),'Marketing',round(389900.20),'Mumbai',now()),
(upper('divya'),lower('DIVYA@outlook.com'),'Sales',round(610500.99),'Delhi',now()),
(upper('suresh'),lower('SURESH@gmail.com'),'IT',round(720000.10),'Pune',now()),
(upper('priya'),lower('PRIYA@yahoo.com'),'Support',round(298700.45),'Coimbatore',now()),
(upper('vijay'),lower('VIJAY@gmail.com'),'Admin',round(410250.88),'Kolkata',now()),
(upper('anitha'),lower('ANITHA@gmail.com'),'Testing',round(530600.60),'Chennai',now()),
(upper('rahul'),lower('RAHUL@outlook.com'),'Development',round(845300.33),'Noida',now());


select count(*)  from emp;

select SUM(salary) from emp;
select AVG(salary) from emp;

select MAX(salary) from emp;
select MIN(salary) from emp;


select from emp where emp_id = 1;