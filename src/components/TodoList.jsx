import Todo from "./Todo";


const TodoList = ({filteredTodos, setTodos}) => {


    return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
            {
                filteredTodos.map(todo => (
                    <Todo key={todo.id} todo={todo} setTodos={setTodos} />
                ))
                /* displayTodos(status) */
            }
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
