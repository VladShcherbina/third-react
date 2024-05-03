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
      <div>
        <form className='form' onSubmit={e => {
          e.preventDefault()
          addTodoHandler()
        }}>
             <input className='input' onChange={(e) => {setValue(e.target.value)}} 
                placeholder='New Todo' 
                type='text'
                value={value} />
            
        </form>
      </div>
    );
  }
  
  export default Form;