import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface todoInterface {
  todo: {
    value: [
      {
        id: string;
        title: string;
        time: string;
        status: boolean;
      }
    ];
  };
}

const initialStateValue = {
  value: [
    { id: uuidv4(), title: "Bible Reading", time: "6:00 AM", status: false },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialStateValue,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    markTodo: (state, action) => {
      console.log(state.value.find((todo) => todo.id === action.payload));
    },
  },
});

export const { addTodo, removeTodo, markTodo } = todoSlice.actions;

export default todoSlice.reducer;
