import { connect } from 'react-redux';
import { deleteTodo } from '../../redux/todo/todo.actions';
import { createStructuredSelector } from 'reselect';
import { selectTodos } from '../../redux/todo/todo.selectors';
import EditTodo from '../EditTodo/EditTodo';

type Props = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, deleteTodo }) => {
  return (
    <>
      <h2 className='text-center mt-5'>Todo Lists</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => {
                      deleteTodo(todo.todo_id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectTodos,
});

export default connect(mapStateToProps, { deleteTodo })(TodoList);
