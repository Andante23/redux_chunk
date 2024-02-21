import znbFanLetter from "store/modules/znbFanSlice";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "store/modules/authSlice";
import letterSlice from "store/modules/letterSlice";

export const store = configureStore({
  reducer: {
    znabi: znbFanLetter,
    auth: authSlice,
    letter: letterSlice,
  },
});
