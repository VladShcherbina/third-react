import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const URL = 'https://jsonplaceholder.typicode.com/todos';

const initialState = {
    todos: [],
}

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (_,) => {
        
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
            if(res.ok) {
                return await res.json()
            }
            
        }  
)

export const addTodoAsync = createAsyncThunk(
    'todos/addTodoAsync',
    async (payload) => {
      const resp = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: payload.text, completed: false }),
      });
  
      if (resp.ok) {
          const todo = await resp.json();
          return { todo };
      }
      }
  );

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
           state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleComplitedTodo: (state, action) => {
            const toggleTodo = state.todos.find((todo) => todo.id === action.payload)
            toggleTodo.completed = !toggleTodo.completed
        },
        sortTodo: (state) => {
             state.todos.sort((a, b) => {
                  if (a.completed === b.completed) {
                        return 0
                    } else if (a.completed) {
                        return 1
                    } else {
                        return -1}
            })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                console.log('action.payload.todo: ', action.payload.todo);
                state.todos.push(action.payload.todo);
              })
    }
})

export const { addTodo, removeTodo, toggleComplitedTodo, sortTodo } = todoSlice.actions
export default todoSlice.reducer


