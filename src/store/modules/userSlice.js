import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avatar: localStorage.getItem("avatar"),
  userId: localStorage.getItem("userId"),
  nickname: localStorage.getItem("nickname"),
};

const letterSlice = createSlice({
  name: "letter",
  initialState,

  reducers: {
    getLoginData(state) {
      return state;
    },
  },
});

export const { getLoginData } = letterSlice.actions;
export default letterSlice.reducer;
