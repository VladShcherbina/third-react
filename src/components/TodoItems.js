import { useEffect} from 'react'
import { useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTodos } from "../redux/store/todoSlice/todoSlice"

function TodoItems() {

const dispatch = useDispatch()
const todos = useSelector(state => state.todo.todos)

useEffect(() => {
  dispatch(fetchTodos())
 }, [dispatch])

return (
  <div>
    <ul className='todos'>
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo} /> )}
    </ul>
  </div>
  );
}

export default TodoItems;
