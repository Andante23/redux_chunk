// authSlice.js : 로그인 상태를 관리하기 위한 리덕스 모듈

import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

// 이전 action creator 와 action variables 를 해줄필요 없음
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    // 로그인상태여부를 가르는
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
