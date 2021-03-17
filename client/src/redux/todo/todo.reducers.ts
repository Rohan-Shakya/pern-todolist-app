import { TodoActionTypes } from './todo.types';

const INITIAL_STATE: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state: TodoState = INITIAL_STATE, action: TodoAction) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
      };
    case TodoActionTypes.GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case TodoActionTypes.DELETE_TODO:
      const filteredTodos: Todo[] = state.todos.filter(
        (todo) => todo.todo_id !== action.payload.todo_id
      );
      return {
        ...state,
        todos: filteredTodos,
        loading: false,
      };
    case TodoActionTypes.UPDATE_TODO:
      const updatedTodos: Todo[] = state.todos.map((todo) =>
        todo.todo_id === action.payload[0].todo_id ? action.payload[0] : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        loading: false,
      };
    case TodoActionTypes.TODOS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TodoActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default todoReducer;
