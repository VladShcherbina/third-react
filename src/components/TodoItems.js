import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import { toggleComplitedTodo, removeTodo, sortTodo } from "../redux/store/todoSlice/todoSlice";

import {getTodos } from "../redux/store/todoSlice/todoSliceJson"

function TodoItems({todo}) {

    const dispatch = useDispatch()
    const {todoJson, error, status} = useSelector(state => state.todoSliceJson)
    useEffect(() => {
      dispatch(getTodos())
    }, [])
    const toggleTodoHandler = (id) => {
        dispatch(toggleComplitedTodo(id))
        dispatch(sortTodo(id))
    }
    
    return (
      <div>
             <ul className='todos'>
                <li className={todo.completed ? 'todo done' : 'todo'}  onClick={() => toggleTodoHandler(todo.id)}>
                  {todo.text}
                  <img src = './delete.png' alt='delete' className='delete' onClick={(e) => {
                    e.stopPropagation()
                    dispatch(removeTodo(todo.id))
                  }}></img>
                </li>
            </ul>
      </div>
    );
  }
  
  export default TodoItems;