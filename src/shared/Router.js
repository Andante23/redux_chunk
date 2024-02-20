// Router.js

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import DetailPage from "../pages/DetailPage.jsx";
import Login from "pages/Login";

import Profile from "pages/Profile";
import { useSelector } from "react-redux";

const Router = () => {
  // 로그인 상태 유무를 가리키는 변수 isAuthenticated !!!
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인이 된 상태라면 */}
        {isAuthenticated === true ? (
          // 로그인 상태라면
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          // 비로그인 상태라면
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
