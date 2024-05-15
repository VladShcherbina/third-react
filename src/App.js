import './App.css';
import Form from './components/Form';
import TodoItems from './components/TodoItems';

function App() {

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='container'>
          <h1 className='title'>TodoList</h1>
          <Form />
          <TodoItems />
        </div>
      </div>
    </div>
  );
}

export default App;
