import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/HomePage";
import Detail from "pages/DetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
           다이나믹 라우팅 안하면  
           단일 페이지만 있는  리액트 앱이 됩니다. 
        */}
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
