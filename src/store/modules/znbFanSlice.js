import { createSlice } from "@reduxjs/toolkit";
import letterData from "assets/fakedata.json";

// 리듀서 함수에 들어가는 초기값
const initialState = letterData;

// createSlice 칸
const ZaNaBiSlice = createSlice({
  name: "zanabiLetter",
  initialState,
  reducers: {
    addZanNaBiLetter(state, action) {
      state.push(action.payload);
    },
    deleteZanNaBiLetter(state, action) {
      return state.filter((letter) => letter.id !== action.payload);
    },

    updateZanNaBiLetter(state, action) {
      return state.map((letter) =>
        letter.id === action.payload.id
          ? { ...letter, content: action.payload.editedContent }
          : letter
      );
    },
  },
});

export const { addZanNaBiLetter, deleteZanNaBiLetter, updateZanNaBiLetter } =
  ZaNaBiSlice.actions;
export default ZaNaBiSlice.reducer;
