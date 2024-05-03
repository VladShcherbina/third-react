import { useDispatch } from "react-redux";
import { toggleComplitedTodo, removeTodo } from "../redux/store/todoSlice/todoSlice";

function TodoItems({todo}) {

    const dispatch = useDispatch()
    const toggleTodoHandler = (id) => {
        dispatch(toggleComplitedTodo(id))
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