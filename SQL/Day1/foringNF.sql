CREATE database grocery; 

use grocery;

create table category (

cat_id int primary key auto_increment,
cat_name varchar(200),
create_by varchar(20) Default "ADMIN",
create_at datetime,
updated_by varchar(20) Default "XXX",
updated_at datetime

);

create table users (

user_id int primary key auto_increment,
user_name varchar(200),
user_email varchar(200),
user_mobile varchar(12),
create_by varchar(20) Default "ADMIN",
create_at datetime,
updated_by varchar(20) Default "XXX",
updated_at datetime

);


create table products (

product_id int primary key auto_increment,
product_name varchar(200),
product_cat_id int, 
product_price int,
product_qun int,
create_by varchar(20) Default "ADMIN",
create_at datetime,
updated_by varchar(20) Default "XXX",
updated_at datetime,

foreign key (product_cat_id) 
references category(cat_id)



);


INSERT INTO users
(user_name, user_email, user_mobile)
VALUES

('Arun Kumar', 'arun@gmail.com', '9876543210'),
('Priya Sharma', 'priya@gmail.com', '9876543211'),
('Rahul Das', 'rahul@gmail.com', '9876543212'),
('Sneha Reddy', 'sneha@gmail.com', '9876543213'),
('Vijay Kumar', 'vijay@gmail.com', '9876543214'),
('Meena Ravi', 'meena@gmail.com', '9876543215'),
('Karthik S', 'karthik@gmail.com', '9876543216'),
('Divya M', 'divya@gmail.com', '9876543217');

INSERT INTO category
(cat_name, create_at, updated_at)
VALUES
('Electronics', NOW(), NOW()),
('Fashion', NOW(), NOW()),
('Books', NOW(), NOW()),
('Furniture', NOW(), NOW()),
('Sports', NOW(), NOW());


INSERT INTO products
(product_name, product_cat_id, product_price, product_qun, create_at, updated_at)
VALUES

-- Electronics
('iPhone 15', 1, 80000, 10, NOW(), NOW()),
('Samsung TV', 1, 55000, 5, NOW(), NOW()),
('Bluetooth Speaker', 1, 3000, 25, NOW(), NOW()),

-- Fashion
('Mens T-Shirt', 2, 799, 50, NOW(), NOW()),
('Womens Handbag', 2, 2500, 20, NOW(), NOW()),
('Running Shoes', 2, 3500, 15, NOW(), NOW()),

-- Books
('JavaScript Guide', 3, 650, 30, NOW(), NOW()),
('Python Basics', 3, 500, 40, NOW(), NOW()),

-- Furniture
('Office Chair', 4, 4500, 12, NOW(), NOW()),
('Wooden Table', 4, 7000, 8, NOW(), NOW()),

-- Sports
('Cricket Bat', 5, 1800, 18, NOW(), NOW()),
('Football', 5, 1200, 22, NOW(), NOW());


create table orders (


order_id int primary key auto_increment,
user_id int,
productid int,
product_quntity int,
ordered_by varchar(20) Default "ADMIN",
ordered_at datetime,
updated_by varchar(20) Default "XXX",
updated_at datetime,


foreign key (user_id) references users(user_id),

foreign key (productid) references products(product_id)

);

INSERT INTO orders
(user_id, productid, product_quntity, ordered_at, updated_at)
VALUES

-- User 1 Orders
(1, 1, 2, NOW(), NOW()),
(1, 3, 1, NOW(), NOW()),

-- User 2 Orders
(2, 5, 4, NOW(), NOW()),
(2, 7, 2, NOW(), NOW()),

-- User 3 Orders
(3, 2, 1, NOW(), NOW()),
(3, 4, 3, NOW(), NOW()),

-- User 4 Orders
(4, 8, 2, NOW(), NOW()),
(4, 10, 1, NOW(), NOW()),

-- User 5 Orders
(5, 6, 5, NOW(), NOW()),
(5, 11, 2, NOW(), NOW());