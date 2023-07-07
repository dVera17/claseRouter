CREATE DATABASE db_m3_prueba_Santiago;
USE db_m3_prueba_Santiago;

CREATE Table usuario(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    fechaNac DATE NOT NULL
);

SHOW FULL TABLES;

INSERT INTO usuario(nombre, apellido, fechaNac) VALUES("Santiago", "Vera", "2004-11-17");

SELECT * FROM usuario;