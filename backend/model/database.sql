CREATE DATABASE perntodo;


-- SERIAL fxn auto. increase pk
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

-- DROP TABLE todo;

SELECT * FROM todo

