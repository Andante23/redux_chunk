// // 저장소 파일
// import { createStore, combineReducers } from "redux";
import znbFanLetter from "store/modules/znbFanLetter";

import { configureStore } from "@reduxjs/toolkit";

// // reducer가 반환한 값을 하나의 상태 객체로  만들어주는  combineReducers 메서드
// const rootReducer = combineReducers({
//   // 생성한 리듀서가 들어간다.
//   zaNaBiLetter,
// });

// // 리덕스 저장소를 만들어주는 메서드 createStore 메서드
// const store = createStore(rootReducer);

// export default store;

export const store = configureStore({
  reducer: {
    znabi: znbFanLetter,
  },
});
