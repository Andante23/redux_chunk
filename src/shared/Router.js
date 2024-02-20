// Router.js

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import DetailPage from "../pages/DetailPage.jsx";
import Login from "pages/Login";
import Join from "pages/Join";
import { useState } from "react";
import Profile from "pages/Profile";
import { useSelector } from "react-redux";

const Router = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);

  // 로그인 상태 유무를 알려주는 변수
  const [isLoginState, setIsLoginState] = useState(isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        {isLoginState === true ? (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
