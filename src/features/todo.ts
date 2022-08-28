import { createSlice } from "@reduxjs/toolkit";

export interface todoInterface {
  todo: {
    value: [
      {
        title: string;
        time: string;
        status: boolean;
      }
    ];
  };
}

const initialStateValue = {
  value: [{ title: "Bible Reading", time: "6:00 AM", state: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialStateValue,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    // removeTodo: (state, action) => {
    //   state.value.filter((todo) => todo.id !== action.payload);
    // },
  },
});

// const newState = {...oldState, [action.payload.data._id]: action.payload.data}

// setAuthorData((prevValue) => [...prevValue, { ...data }]);

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
