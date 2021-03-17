interface Todo {
  description: string;
  todo_id: number;
}

type TodoState = {
  todos: Todo[];
  loading: Boolean;
  error: String | null;
};

type TodoAction = {
  type: String;
  payload: Todo | String | Array;
};

type DispatchType = (args: TodoAction) => TodoState;

type AppState = {
  description: String;
};
