-- Create Bamazon Database --
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burgers_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP,
  PRIMARY KEY (id)
);
