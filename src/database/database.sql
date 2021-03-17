-- Creating database named 'perntodo'
-- CREATE DATABASE perntodo;

-- Creating table named 'todo'
CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

-- -- Inserting the data
-- INSERT INTO todo ( todo_id, description) 
-- VALUES (1, 'Solving todos');

-- -- Geting all the datas
-- SELECT * FROM todo;

-- -- Getting a todo
-- SELECT * FROM todo WHERE todo_id = 1;

-- -- Updating a data
-- UPDATE todo SET description = 'Solving algorithms' WHERE todo_id = 1;


-- -- Deleting a data
-- DELETE FROM todo WHERE todo_id = 1;
