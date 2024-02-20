import znbFanLetter from "store/modules/znbFanSlice";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "store/modules/authSlice";

export const store = configureStore({
  reducer: {
    znabi: znbFanLetter,
    auth: authSlice,
  },
});
