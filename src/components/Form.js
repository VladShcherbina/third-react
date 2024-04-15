import './Form.css'
import { useState } from 'react';



function Form(props) {

    const [value, setValue] = useState('')


    return (
      <div>
        <form className='form' onSubmit={e => {
          e.preventDefault()
          props.putTodo(value)
          setValue('')
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