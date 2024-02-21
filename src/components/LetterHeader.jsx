import React from "react";
import styled from "styled-components";
import { logout } from "../store/modules/authSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/* LetterHeader : 편지페이지 상단...*/
export const LetterHeader = () => {
  const dispatch = useDispatch();

  const navi = useNavigate();

  return (
    <>
      <StLetterHeader>
        <StLetterHTag>잔나비 Letter</StLetterHTag>

        <StNavBar>
          {" "}
          <StLetterPTag
            onClick={() => {
              navi(`/profile`);
            }}
          >
            프로필
          </StLetterPTag>
          <StLetterPTag
            onClick={() => {
              dispatch(logout());
            }}
          >
            로그아웃
          </StLetterPTag>
        </StNavBar>
      </StLetterHeader>
    </>
  );
};

const StNavBar = styled.nav`
  display: flex;
`;

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
  padding: 5px;
`;
