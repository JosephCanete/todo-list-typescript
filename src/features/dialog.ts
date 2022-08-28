import { createSlice } from "@reduxjs/toolkit";

export interface dialogInterface {
  dialog: {
    value: {
      dialog: boolean;
    };
  };
}

const initialStateValue = {
  value: { dialog: false },
};

export const openDialogSlice = createSlice({
  name: "dialog",
  initialState: initialStateValue,
  reducers: {
    toggleDialog: (state, action) => {
      state.value.dialog = !state.value.dialog;
    },
  },
});

export const { toggleDialog } = openDialogSlice.actions;

export default openDialogSlice.reducer;
