import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    content: null,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },

    closeModal: (state) => {
      state.isOpen = false;
    },

    updateModalContentName: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { openModal, updateModalContentName, closeModal } =
  modalSlice.actions;

export default modalSlice.reducer;
