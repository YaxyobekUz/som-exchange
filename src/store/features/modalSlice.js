import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  name: null,
  title: null,
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.name = payload?.name ?? null;
      state.data = payload?.data ?? null;
      state.title = payload?.title ?? null;
    },

    closeModal: (state) => {
      Object.assign(state, initialState);
    },
  },
});
  
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
