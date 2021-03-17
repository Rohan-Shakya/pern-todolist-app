import { Router } from 'express';
// Controllers
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from '../controllers/todoController';

// Initialize Router
const router = Router();

// Routes

/*
  @route GET /todos
  @desc Get all todos
  @access Public
*/
router.get('/', getTodos);

/*
  @route POST /todos
  @desc Create a new Todo
  @access Public
*/
router.post('/', createTodo);

/*
  @route GET /todos/:id
  @desc Get single todo by id
  @access Public
*/
router.get('/:id', getTodoById);

/*
  @route PUT /todos/:id
  @desc Update single todo by id
  @access Public
*/
router.put('/:id', updateTodo);

/*
  @route DELETE /todos/:id
  @desc Delete todo by id
  @access Public
*/
router.delete('/:id', deleteTodo);

export default router;
