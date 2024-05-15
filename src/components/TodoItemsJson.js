import { useDispatch, useSelector} from "react-redux";
import { useEffect} from 'react'
import { toggleComplitedTodo, removeTodo, sortTodo } from "../redux/store/todoSlice/todoSlice";

import { fetchTodos } from "../redux/store/todoSlice/todoSlice"




function TodoItemsJson() {

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo.todos)
    const toggleTodoHandler = (id) => {
        dispatch(toggleComplitedTodo(id))
        dispatch(sortTodo(id))
    }
   

    useEffect(() => {
      dispatch(fetchTodos())
    }, [dispatch])
    
    
    return (
      <div>
              <ul className='todos'>
                {todos.map((e) => {
                    return (<li key = {e.id} className={e.completed ? 'todo done' : 'todo'}  onClick={() => toggleTodoHandler(e.id)}>
                    {e.title}
                    <img src = './delete.png' alt='delete' className='delete' onClick={(elem) => {
                      elem.stopPropagation()
                      dispatch(removeTodo(e.id))
                    }}></img>
                  </li>)
                })}
                
            </ul>
      </div>
    );
  }
  
  export default TodoItemsJson;