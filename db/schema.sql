-- Initial creation of database --
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

-- Uses the 'burgers_db' database housed within MySQL --
USE burgers_db;

-- Creates the table 'burgers' and houses the structure of that table --
CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);