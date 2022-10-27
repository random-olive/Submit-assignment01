import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  author: "",
  body: "",
  createdAt: "",
  postId: "",
  title: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost: (state, action) => {
      state.post = action.payload.post;
    },
  },
});

export const { getPost } = postSlice.actions;
