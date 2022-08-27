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

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: { title: "First Todo Item", time: "9:00 AM", state: false },
  },
  reducers: {
    addTodo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default todoSlice.reducer;
