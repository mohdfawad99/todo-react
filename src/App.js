
import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  
  useEffect(() => {
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]))
      } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)))
        setTodos(todoLocal)
        // console.log(todoLocal);
      }
    }
    getLocalTodos()
  }, []);
  
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed' :
          setFilteredTodos(todos.filter(todo => todo.completed))
          break
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => !todo.completed))
          break
        case 'all':
          setFilteredTodos(todos)
          break
        default:
          console.log('error filtering');
          
      }
    }
    filterHandler()
    const saveToLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    saveToLocalTodos()
  }, [todos, status])



  return (
    <div className="App">
      <header>
      <h1>React Todo</h1>
      </header>
      <Form setTodos={setTodos} setStatus={setStatus} />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
