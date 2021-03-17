import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Input from './components/Input/Input';
import TodoList from './components/TodoLists/TodoList';
import { getTodos } from './redux/todo/todo.actions';

type Props = {
  getTodos: () => void;
};
class App extends Component<Props> {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center mt-5'>Pern Todo List</h1>
        <Input />
        <TodoList />
      </div>
    );
  }
}

export default connect(null, { getTodos })(App);
