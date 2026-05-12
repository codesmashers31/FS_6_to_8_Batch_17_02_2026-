-- Select , Where , ORDER BY, Group by, Having
use companydb;
-- Fetch The All Datas
select * from emp; 
-- Fetch Speci - column name
select  email,department from emp;


-- WHERE CONDITION USING
select * from emp WHERE salary > 300000 AND department = "IT";

 -- ORDER BY
 
 select * from emp order by emp_id ASC;


-- GROUP BY
-- select column_name, aggregate_function from tablename group by column_name  


select name, count(*) as Nametotal from emp group by name;

select department, avg(salary) as SalaryCount from emp group by department;

select city ,avg(salary) as CityAVG from emp group by city;


-- select columnName,  aggregate_function from table_name group by column_name HAVING condition;

select department, sum(salary) from emp group by department having sum(salary) < 410251;

select name, avg(salary) from emp group by name having avg(salary) > 500000;

