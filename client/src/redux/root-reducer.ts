import { combineReducers } from 'redux';
import todoReducer from './todo/todo.reducers';

export default combineReducers({
  todo: todoReducer,
});
