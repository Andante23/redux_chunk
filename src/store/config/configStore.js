import { configureStore } from "@reduxjs/toolkit";
import authSlice from "store/modules/authSlice";
import letterSlice from "store/modules/userSlice";
import znbFanSlice from "store/modules/znbFanSlice";

export const store = configureStore({
  reducer: {
    znabi: znbFanSlice,
    auth: authSlice,
    letter: letterSlice,
  },
});
