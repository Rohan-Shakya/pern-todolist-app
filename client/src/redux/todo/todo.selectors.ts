import { createSelector } from 'reselect';

const selectTodo = (state: any) => state.todo;

export const selectTodos = createSelector(
  [selectTodo],
  (todo: TodoState) => todo.todos
);
