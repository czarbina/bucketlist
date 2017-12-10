-- Create bucketlist db --
DROP DATABASE IF EXISTS bucketlistDB;
CREATE DATABASE bucketlistDB;

USE bucketlistDB;

CREATE TABLE bucketlist(
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(100) NOT NULL,
  accomplished BOOLEAN DEFAULT false,
  date TIMESTAMP,
  PRIMARY KEY (id)
);
