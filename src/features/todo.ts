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
    { id: uuidv4(), title: "Eating Breakfast", time: "7:00 AM", status: false },
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
      state.value = state.value.filter((todo) => todo.id === action.payload.id);
    },
    alterTodo: (state, action) => {
      console.log("Alter todo invoked");
      const result = state.value.find((todo) => todo.id === action.payload.id);
      console.log(result);
    },
  },
});

export const { addTodo, removeTodo, markTodo, alterTodo } = todoSlice.actions;

export default todoSlice.reducer;
