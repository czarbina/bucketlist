-- Create Bamazon Database --
DROP DATABASE IF EXISTS bucketlistDB;
CREATE DATABASE bucketlistDB;

USE bucketlistDB;

CREATE TABLE list(
  id INT NOT NULL AUTO_INCREMENT,
  thingToDo VARCHAR(100) NOT NULL,
  thingDone BOOLEAN DEFAULT false,
  date TIMESTAMP,
  PRIMARY KEY (id)
);

