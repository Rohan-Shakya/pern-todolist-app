import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../../redux/todo/todo.actions';

type Prop = {
  todo: Todo;
  editTodo: (id: number, data: AppState) => Promise<void>;
};

class EditTodo extends Component<Prop> {
  state = {
    description: this.props.todo.description,
  };

  render() {
    const { todo } = this.props;
    return (
      <>
        <button
          type='button'
          className='btn btn-warning'
          data-toggle='modal'
          data-target={`#id${todo.todo_id}`}
        >
          Edit
        </button>
        <div
          className='modal'
          id={`id${todo.todo_id}`}
          onClick={() => this.setState({ description: this.state.description })}
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title'>Edit Todo</h4>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  onClick={() =>
                    this.setState({ description: this.state.description })
                  }
                >
                  &times;
                </button>
              </div>

              <div className='modal-body'>
                <input
                  type='text'
                  className='form-control'
                  value={this.state.description}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    this.setState({ description: e.currentTarget.value });
                  }}
                />
              </div>

              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-warning'
                  data-dismiss='modal'
                  onClick={(e) => this.props.editTodo(todo.todo_id, this.state)}
                >
                  Edit
                </button>
                <button
                  type='button'
                  className='btn btn-danger'
                  data-dismiss='modal'
                  onClick={() =>
                    this.setState({ description: this.state.description })
                  }
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { editTodo })(EditTodo);
