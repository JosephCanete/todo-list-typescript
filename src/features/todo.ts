import { createSlice } from "@reduxjs/toolkit";

export interface todoInterface {
  todo: {
    value: {
      title: string;
      time: string;
      status: boolean;
    };
  };
}

const initialStateValue = {
  value: { title: "First Todo Item", time: "9:00 AM", state: false },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialStateValue,
  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, { ...action.payload }];
    },
  },
});

// setAuthorData((prevValue) => [...prevValue, { ...data }]);

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
