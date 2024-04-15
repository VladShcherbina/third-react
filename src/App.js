import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {

  const [todos, setTodos] = useState([])

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, {id: Date.now(), text: value, done: false}])
    }
  }

  

  const toggleTodo =(id) => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo;

      return {
        ...todo,
        done: !todo.done,
      }
    }))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='container'>
          <h1 className='title'>TodoList</h1>
          <Form putTodo={putTodo}/>
          <ul className='todos'>
            {todos.sort((a, b)=> {
              if (a.done === b.done) {
                return 0
              } else if (a.done) {
                return 1
              } else {
                return -1}
            }).map((todo) => {
              return (
                <li className={todo.done ? 'todo done' : 'todo'} key ={todo.id} onClick={() => {toggleTodo(todo.id)}}>
                  {todo.text}
                  <img src = './delete.png' alt='delete' className='delete' onClick={(e) => {
                    e.stopPropagation()
                    removeTodo(todo.id)
                  }}></img>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
