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
    { id: uuidv4(), title: "Eating Breakfast", time: "7:00 AM", status: true },
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
      //Find the Index Object we want to update
      const indexTodoDone = state.value.findIndex(
        (todo) => todo.id === action.payload.itemId
      );

      state.value[indexTodoDone] = {
        ...state.value[indexTodoDone],
        status: !action.payload.itemStatus,
      };
    },
    alterTodo: (state, action) => {
      const indexTodoAlter = state.value.findIndex(
        (todo) => todo.id === action.payload.id
      );

      state.value[indexTodoAlter] = {
        ...state.value[indexTodoAlter],
        title: action.payload.title,
        time: action.payload.time,
      };
    },
  },
});

export const { addTodo, removeTodo, markTodo, alterTodo } = todoSlice.actions;

export default todoSlice.reducer;
