DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;


USE bamazon;


CREATE TABLE product(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);
INSERT INTO product (product_name, department_name, price,stock_quantity)
VALUES ("television", "electrical", 300, 20);
INSERT INTO product (product_name, department_name, price,stock_quantity)
VALUES ("radio", "electrical", 200, 30);
INSERT INTO product (product_name, department_name, price,stock_quantity)
VALUES ("microwave", "electrical", 100, 35);

INSERT INTO product (product_name, department_name, price,stock_quantity)
VALUES ("iphone", "telephone", 100, 100);
INSERT INTO product (product_name, department_name, price,stock_quantity)
VALUES ("samsong", "telephone", 200, 150);
INSERT INTO product (product_name, department_name, price,stock_quantity)
VALUES ("lumi", "telephone", 200, 200);
INSERT INTO product (product_name, department_name, price,stock_quantity)
VALUES ("trowzers", "clothes", 50, 200);
INSERT INTO product (product_name, department_name, price,stock_quantity)
VALUES ("shirt", "clothes", 40, 200);
INSERT INTO product (product_name, department_name, price,stock_quantity)
VALUES ("shoes", "clothes", 30, 200);
INSERT INTO product (product_name, department_name, price,stock_quantity)
VALUES ("cravat", "clothes", 30, 200);