import { Component } from 'react';
// Components
import Input from './components/Input/Input';
import TodoList from './components/TodoLists/TodoList';
// Redux
import { connect } from 'react-redux';
import { getTodos } from './redux/todo/todo.actions';
// Styles
import './App.css';

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
