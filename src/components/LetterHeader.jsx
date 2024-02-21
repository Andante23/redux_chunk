import React from "react";
import styled from "styled-components";
import { logout } from "../store/modules/authSlice.js";
import { useDispatch } from "react-redux";

/* LetterHeader : 편지페이지 상단...*/
export const LetterHeader = () => {
  const dispatch = useDispatch();

  return (
    <>
      <StLetterHeader>
        <StLetterHTag>잔나비 Letter</StLetterHTag>

        {/*  
           logout이 dispatch를 통해 리듀서에 전달되면  상태값이 false가 됩니다. 
           동시에 로그인페이지로 이동합니다. 
           
      */}
        <StLetterPTag
          onClick={() => {
            dispatch(logout());
          }}
        >
          로그아웃
        </StLetterPTag>
      </StLetterHeader>
    </>
  );
};

const StLetterHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StLetterHTag = styled.h1`
  margin: 10px;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  padding-left: 5px;
`;

const StLetterPTag = styled.p`
  padding-right: 5px;
`;
