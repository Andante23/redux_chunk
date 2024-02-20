import znbFanLetter from "store/modules/znbFanLetter";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "store/modules/authSlice";

export const store = configureStore({
  reducer: {
    znabi: znbFanLetter,
    auth: authSlice,
  },
});
