import { Request, Response } from 'express';
import { pool } from '../database/db';
import { QueryResult } from 'pg';

// Get all todos
export const getTodos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const todos: QueryResult = await pool.query(
      'SELECT * FROM todo ORDER BY todo_id DESC'
    );
    return res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json('Internal Server error');
  }
};

// Create a new todo
export const createTodo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { description } = req.body;
  try {
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES ($1) RETURNING *',
      [description]
    );
    return res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json('Internal Server error');
  }
};

// Get a todo by id
export const getTodoById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  try {
    const todos = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      id,
    ]);
    return res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json('Internal Server error');
  }
};

// Update a todo by id
export const updateTodo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  const { description } = req.body;
  try {
    const todos = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *',
      [description, id]
    );
    return res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json('Internal Server error');
  }
};

// Delete a todo by id
export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  try {
    const todos = await pool.query(
      'DELETE FROM todo WHERE todo_id = $1 RETURNING *',
      [id]
    );
    return res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json('Internal Server Error');
  }
};
