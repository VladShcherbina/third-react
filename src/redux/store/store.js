import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice/todoSlice";
import todoSliceJson from "./todoSlice/todoSliceJson";


export const store = configureStore({
    reducer: {
        todo: todoSlice,
        todoSliceJson: todoSliceJson
    }
})