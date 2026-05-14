create database E_Commerces;
use E_Commerces;
create table Customers_1 (
	cust_id int primary key auto_increment,
    cust_name varchar(200),
    cust_city varchar(200)
);
insert into Customers_1 (cust_name,cust_city) values ("Leon","Chennai"),("Pranesh","Tirunalvelli");

create table orders (
	order_id int primary key auto_increment,
    Prod_name varchar(50),
    Prod_amt int,
    cust_id int,
    
    foreign key (cust_id) references Customers_1 (cust_id)
    
);

insert into orders (Prod_name,Prod_amt,cust_id) values ("5-Star",30,1),("Frooti",50,1);


select cust_name, Prod_name, Prod_amt from Customers_1 inner join orders on Customers_1.cust_id = orders.cust_id;


select cust_name , Prod_name from Customers_1 left join orders on Customers_1.cust_id = orders.cust_id where orders.order_id is null;



select cust_name, count(order_id) as total_orders from Customers_1 left join orders on Customers_1.cust_id = orders.cust_id group by Customers_1.cust_name
