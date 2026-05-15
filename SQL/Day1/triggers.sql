SELECT * FROM companydb.emp;
use companydb;

create table updatedata (
date_id int primary key auto_increment,
emp_name varchar(200),
message varchar(300)

);

alter table updatedata add column new_name varchar(200);

delimiter $$

create trigger updatevalue AFTER UPDATE ON emp
FOR EACH ROW BEGIN
insert into updatedata (emp_name,message,new_name) values (old.name,"after update on emp",new.name);

END $$

delimiter ;

update emp set name = "React" where emp_id = 1;
select * from emp where salary < (select max(salary) from emp);