// Router.js

// import { useSelector } from "react-redux"; // useSelector를 추가합니다.
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/HomePage";
import Detail from "pages/DetailPage";
import Login from "pages/Login";
import Join from "pages/Join";
import { useState } from "react";
import Profile from "pages/Profile";

const Router = () => {
  // 로그인 상태 유무를 알려주는 변수
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        )}

        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
