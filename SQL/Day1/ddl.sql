CREATE DATABASE newdb; 
use newdb;

CREATE TABLE products (
user_id INT PRIMARY KEY auto_increment,
userName varchar(20) NOT NULL,
userMobile INT ,
userEmail varchar(20) unique,
status varchar(20) default 0
);




-- Alter-- 

-- ReName the Table

ALTER TABLE products RENAME TO Pro;

-- Change the Datatype 


ALTER TABLE pro MODIFY userMobile varchar(20);

 ALTER TABLE pro MODIFY userMobile int;
 
 
-- chnage the column 

ALTER TABLE pro rename COLUMN userMobile to UserPhone;

-- ADD the Column

ALTER table pro add userType varchar(200); 

-- Table column Drop
ALTER table pro DROP column userType;

 

show tables;


-- DROP table pro;

-- truncate table pro; 

