import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/config/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // App을 Provider로 감싸고 , configstore에서  createStore로 생성한  store  넣어주기
  <Provider store={store}>
    <App />
  </Provider>
);
