import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    todoJson: [],
    status: null,
    error: null,
}

export const getTodos = createAsyncThunk(
    'todoJson/getTodos',
    async (_, { rejectWithValue}) => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            if(!res.ok) {
                throw new Error('Server Error!')
            }
            return await res.json()
        } catch(error) {
            return rejectWithValue(error.message)
        }  
    }
)

export const todoSliceJson = createSlice({
    name: 'todoJson',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.todoJson = action.payload;
            })
    }
})

export const {setTodoJson} = todoSliceJson.actions

export default todoSliceJson.reducer