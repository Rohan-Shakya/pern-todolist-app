import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todo/todo.actions';

type Props = {
  addTodo: (todo: Todo | any) => void;
};

class InputTodo extends Component<Props> {
  state = {
    description: '',
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.state.description.length > 0) {
      this.props.addTodo({ description: this.state.description });
      this.setState({ description: '' });
    }
  };

  render() {
    return (
      <form className='mt-4 d-flex' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='description'
          className='form-control'
          placeholder='Enter a task'
          onChange={this.handleChange}
          value={this.state.description}
        />
        <button type='submit' className='btn btn-success'>
          ADD
        </button>
      </form>
    );
  }
}

export default connect(null, { addTodo })(InputTodo);
