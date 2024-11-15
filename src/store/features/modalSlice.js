import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  name: null,
  title: null,
  isOpen: false,
  extraData: {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload = {} }) => {
      state.data = payload.data ?? state.data;
      state.name = payload.name ?? state.name;
      state.title = payload.title ?? state.title;
      state.isOpen = true;
    },

    closeModal: (state, { payload }) => {
      const { name, data } = payload || {};

      state.data = null;
      state.name = null;
      state.title = null;
      state.isOpen = false;

      if (name) {
        state.extraData[name] = data;
      }
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
