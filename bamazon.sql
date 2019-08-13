DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products(
	item_id INT(4) NOT NULL,
    product_name VARCHAR(150) NOT NULL,
    department_name VARCHAR (150) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(20) NOT NULL,
    PRIMARY KEY(item_id)
);

SELECT * FROM products;
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (100, "green striped socks", "misc", 1.99, 8),
    (200, "red polo", "tops", 14.50, 10),
    (201, "blue t-shirt","tops", 10.00, 10),
    (301, "dark blue jeans", "bottoms", 20.00, 9),
    (321, "black leggings", "bottoms", 10.50, 15),
    (404, "grey cardigan", "outerwear", 15.00, 10),
    (456, "black puffy jacket", "outerwear", 45.00, 5),
    (599, "leather belt", "misc", 5.99, 11),
    (600, "purple flowy dress", "formal", 30.00, 6),
    (601, "really fancy smanchy purse","misc", 9999.00, 1)