CREATE DATABASE grocery;

USE grocery;

-- =========================================
-- CATEGORY TABLE
-- =========================================

CREATE TABLE category (

    cat_id INT PRIMARY KEY AUTO_INCREMENT,

    cat_name VARCHAR(200),

    create_by VARCHAR(20) DEFAULT 'ADMIN',

    create_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    updated_by VARCHAR(20) DEFAULT 'XXX',

    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP

);

-- =========================================
-- USERS TABLE
-- =========================================

CREATE TABLE users (

    user_id INT PRIMARY KEY AUTO_INCREMENT,

    user_name VARCHAR(200),

    user_email VARCHAR(200),

    user_mobile VARCHAR(12),

    create_by VARCHAR(20) DEFAULT 'ADMIN',

    create_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    updated_by VARCHAR(20) DEFAULT 'XXX',

    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP

);

-- =========================================
-- PRODUCTS TABLE
-- =========================================

CREATE TABLE products (

    product_id INT PRIMARY KEY AUTO_INCREMENT,

    product_name VARCHAR(200),

    product_cat_id INT,

    product_price INT,

    product_qun INT,

    create_by VARCHAR(20) DEFAULT 'ADMIN',

    create_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    updated_by VARCHAR(20) DEFAULT 'XXX',

    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (product_cat_id)
    REFERENCES category(cat_id)

);

-- =========================================
-- ORDERS TABLE
-- =========================================

CREATE TABLE orders (

    order_id INT PRIMARY KEY AUTO_INCREMENT,

    user_id INT,

    productid INT,

    product_quntity INT,

    ordered_by VARCHAR(20) DEFAULT 'ADMIN',

    ordered_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    updated_by VARCHAR(20) DEFAULT 'XXX',

    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
    REFERENCES users(user_id),

    FOREIGN KEY (productid)
    REFERENCES products(product_id)

);

-- =========================================
-- INSERT CATEGORY DATA
-- =========================================

INSERT INTO category (cat_name)
VALUES

('Electronics'),
('Fashion'),
('Books'),
('Furniture'),
('Sports');

-- =========================================
-- INSERT USERS DATA
-- =========================================

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

-- =========================================
-- INSERT PRODUCTS DATA
-- =========================================

INSERT INTO products
(product_name, product_cat_id, product_price, product_qun)
VALUES

-- Electronics
('iPhone 15', 1, 80000, 10),

('Samsung TV', 1, 55000, 5),

('Bluetooth Speaker', 1, 3000, 25),

-- Fashion
('Mens T-Shirt', 2, 799, 50),

('Womens Handbag', 2, 2500, 20),

('Running Shoes', 2, 3500, 15),

-- Books
('JavaScript Guide', 3, 650, 30),

('Python Basics', 3, 500, 40),

-- Furniture
('Office Chair', 4, 4500, 12),

('Wooden Table', 4, 7000, 8),

-- Sports
('Cricket Bat', 5, 1800, 18),

('Football', 5, 1200, 22);

-- =========================================
-- INSERT ORDERS DATA
-- =========================================

INSERT INTO orders
(user_id, productid, product_quntity)
VALUES

-- Arun Kumar
(1, 1, 2),
(1, 3, 1),

-- Priya Sharma
(2, 5, 4),
(2, 7, 2),

-- Rahul Das
(3, 2, 1),
(3, 4, 3),

-- Sneha Reddy
(4, 8, 2),
(4, 10, 1),

-- Vijay Kumar
(5, 6, 5),
(5, 11, 2);

-- =========================================
-- VIEW COMPLETE ORDER DETAILS
-- =========================================

SELECT

o.order_id,

u.user_name,

u.user_email,

p.product_name,

c.cat_name,

p.product_price,

o.product_quntity,

(p.product_price * o.product_quntity) AS total_price,

o.ordered_at

FROM orders o

INNER JOIN users u
ON o.user_id = u.user_id

INNER JOIN products p
ON o.productid = p.product_id

INNER JOIN category c
ON p.product_cat_id = c.cat_id;