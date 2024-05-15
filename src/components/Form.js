import './Form.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/store/todoSlice/todoSlice';
import { v4 } from 'uuid';



function Form() {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const addTodoHandler = () => {
      const todo = {
        id: v4(),
        text: value,
        completed: false
      }
      dispatch(addTodo(todo))
      setValue('')
    }

    return (
      <div >
        <form className='form' >
              <input className='input' onChange={(e) => {setValue(e.target.value)}} 
                placeholder='New Todo' 
                type='text'
                value={value} />
              <button className='addBnt' onClick={e => {
                e.preventDefault()
                addTodoHandler()
                }} type='submit'>Add Todo</button>
        </form>
      </div>
    );
  }
  
  export default Form;