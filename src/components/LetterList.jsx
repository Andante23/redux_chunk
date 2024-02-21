import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  __addZanNaBiLetter,
  __getZanNaBiLetter,
} from "store/modules/znbFanSlice";

import styled from "styled-components";

const LetterList = () => {
  const navigate = useNavigate();

  const [buttonValue, setButtonValue] = useState("최정훈");
  const dispatch = useDispatch();

  const handleArtistPostViewClick = (selectValue) =>
    setButtonValue(selectValue);

  useEffect(() => {
    dispatch(__getZanNaBiLetter());
  }, []);

  const data = useSelector((state) => state.znabi.letters);
  console.log(data);

  return (
    <>
      <StPostView>
        <StPostViewButton onClick={() => handleArtistPostViewClick("최정훈")}>
          최정훈
        </StPostViewButton>
        <StPostViewButton onClick={() => handleArtistPostViewClick("김도형")}>
          김도형
        </StPostViewButton>
      </StPostView>
      {/* 아티스트에 해당하는 게시물이 존재하지 않을 때 */}

      {data.map((data) => (
        <div key={data.id}>
          <h1> {data.nickname}</h1>
          <p>{data.content}</p>
          <button
            onClick={() => {
              navigate(`/detail/${data.id}`);
            }}
          >
            add
          </button>
        </div>
      ))}
    </>
  );
};

export default LetterList;

const StFilTerCardBorder = styled.div`
  background-color: black;
  border-radius: 5px;
  color: white;
  margin: 10px;
`;

const StFilTerCardItem = styled.figure`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const StFilTerCardItemHeroImage = styled.img`
  margin-left: 10px;
  margin-right: 12px;
  border-radius: 10px;
  width: 100px;
`;

const StToThePage = styled.p`
  cursor: pointer;
  color: #fbf7f7;
  padding-left: 1000px;
`;

const StPostView = styled.div`
  margin: auto;
`;

const StPostViewButton = styled.button`
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px;
`;
