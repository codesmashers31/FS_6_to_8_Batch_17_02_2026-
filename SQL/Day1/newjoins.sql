create database join_db;

use join_db;


create table depart (

depart_id int primary key auto_increment,
depart_name varchar(200)

);


insert into depart (depart_name) values ("Developers"),("HR"),("Sales"),("Support"),("Testing");



create table emp (

emp_id int primary key auto_increment,
emp_name varchar(200),
emp_salary int,
depart_id int,

foreign key (depart_id) references depart(depart_id)


);


insert into emp (emp_name,emp_salary,depart_id) values ("React",3000,1),("Node",4000,2),("JS",5000,NULL),("HTML",6000,NULL),("SQL",7000,3);




select emp_name,depart_name from depart inner join emp on depart.depart_id = emp.depart_id;

select emp_name, ifnull(depart_name, "No Data Found") as departname  from emp left join depart on emp.depart_id = depart.depart_id;

select ifnull(emp.emp_name,"No Emp there") as Emp_Nmae,depart_name from emp right join depart on emp.depart_id = depart.depart_id;


select emp_name,depart_name from emp left join depart on emp.depart_id = depart.depart_id union select emp_name,depart_name from emp right join depart on emp.depart_id = depart.depart_id;








select emp_name,depart_name from emp cross join depart; 


