import znbFanLetter from "store/modules/znbFanLetter";

import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "store/modules/authSlice";

export const store = configureStore({
  reducer: {
    znabi: znbFanLetter,
    auth: userInfoSlice,
  },
});
