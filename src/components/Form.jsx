import { useState } from "react";

const Form = ({ setTodos, setStatus }) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(inputText !== ''){
        setTodos(prevTodos => [...prevTodos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    }
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <div>
      <form>
        <input type="text" onChange={inputTextHandler} value={inputText} className="todo-input" />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
