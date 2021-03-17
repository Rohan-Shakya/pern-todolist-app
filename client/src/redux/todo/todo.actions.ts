import { TodoActionTypes } from './todo.types';
import axios from 'axios';

export const addTodo = (todo: Todo) => async (dispatch: DispatchType) => {
  try {
    setLoading();
    const res = await axios.post<Todo[]>('/todos', todo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: TodoActionTypes.ADD_TODO, payload: res.data });
  } catch (err) {
    dispatch({
      type: TodoActionTypes.TODOS_ERROR,
      payload: err.message,
    });
  }
};

export const getTodos = () => async (dispatch: DispatchType) => {
  try {
    setLoading();
    const res = await axios.get<Todo[]>('/todos');

    dispatch({
      type: TodoActionTypes.GET_TODOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TodoActionTypes.TODOS_ERROR,
      payload: err.message,
    });
  }
};

export const deleteTodo = (id: Number) => async (dispatch: DispatchType) => {
  try {
    setLoading();
    const res = await axios.delete<Todo[]>(`/todos/${id}`);
    dispatch({
      type: TodoActionTypes.DELETE_TODO,
      payload: res.data[0],
    });
  } catch (err) {
    dispatch({
      type: TodoActionTypes.TODOS_ERROR,
      payload: err.message,
    });
  }
};

export const editTodo = (id: Number, data: AppState) => async (
  dispatch: DispatchType
) => {
  try {
    setLoading();
    const res = await axios.put<AppState>(`/todos/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: TodoActionTypes.UPDATE_TODO, payload: res.data });
  } catch (err) {
    dispatch({
      type: TodoActionTypes.TODOS_ERROR,
      payload: err.message,
    });
  }
};

export const setLoading = () => {
  return {
    type: TodoActionTypes.SET_LOADING,
  };
};
