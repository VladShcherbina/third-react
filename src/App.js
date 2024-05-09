import './App.css';
import Form from './components/Form';
import TodoItems from './components/TodoItems';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todo.todos)

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='container'>
          <h1 className='title'>TodoList</h1>
          <Form />
          {todos?.map(todo => (<TodoItems key ={todo.id} todo={todo} />))}
        </div>
      </div>
    </div>
  );
}

export default App;
