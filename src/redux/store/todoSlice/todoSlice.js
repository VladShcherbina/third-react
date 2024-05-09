import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

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
        }
    }
})

export const { addTodo, removeTodo, toggleComplitedTodo } = todoSlice.actions
export default todoSlice.reducer