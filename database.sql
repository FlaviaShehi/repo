CREATE DATABASE todoapp

CREATE TABLE category(
 category_id SERIAL PRIMARY KEY,
 category_name VARCHAR(255)
  )

  CREATE TABLE todo(
   todo_id INT GENERATED ALWAYS AS IDENTITY,
   category_id  INT,
   task_name VARCHAR(255) NOT NULL,
  notes VARCHAR (255),
 date DATE,
 PRIMARY KEY(todo_id),
   CONSTRAINT fk_category
      FOREIGN KEY(category_id) 
    REFERENCES category(category_id)
);
