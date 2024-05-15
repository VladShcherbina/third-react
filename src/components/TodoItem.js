import { useDispatch} from "react-redux";
import { toggleComplitedTodo, removeTodo, sortTodo } from "../redux/store/todoSlice/todoSlice";

function TodoItem({todo}) {

    const dispatch = useDispatch()
    const toggleTodoHandler = (id) => {
        dispatch(toggleComplitedTodo(id))
        dispatch(sortTodo(id))
    }

    return ( 
              <li className={todo.completed ? 'todo done' : 'todo'}  onClick={() => toggleTodoHandler(todo.id)}>
                 {todo.title}
                 <img src = './delete.png' alt='delete' className='delete' onClick={(e) => {
                   e.stopPropagation()
                   dispatch(removeTodo(todo.id))
                 }}></img>
              </li>
    );
  }
  
  export default TodoItem;