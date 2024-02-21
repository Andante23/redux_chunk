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

  const goToDetail = (id) => navigate(`/detail/${id}`);

  useEffect(() => {
    dispatch(__getZanNaBiLetter());
  }, []);

  const letterData = useSelector((state) => state.znabi.letters);

  const { userId } = localStorage.getItem("userId");

  return (
    <>
      <div>
        <button onClick={() => handleArtistPostViewClick("최정훈")}>
          최정훈
        </button>
        <button onClick={() => handleArtistPostViewClick("김도형")}>
          김도형
        </button>
      </div>

      {/* 아티스트에 해당하는 데이터가 없다면  */}
      {!letterData.filter((letter) => letter.writedTo === buttonValue)
        .length && (
        <div>
          <p>
            <b>{buttonValue}</b>에 해당하는 데이터가 없습니다.
          </p>
        </div>
      )}

      {/* 아티스트에 해당하는 데이터가 있다면 */}
      {letterData
        .filter((data) => data.writedTo === buttonValue)
        .map((data) => (
          <div key={data.id}>
            <img
              src={data.avatar}
              alt="대체이미지"
              style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            />
            <article>
              <b>{data.nickname}</b>
              <p>{data.content}</p>
            </article>

            <button
              onClick={() => {
                goToDetail(data.id);
              }}
            >
              더 보기
            </button>
          </div>
        ))}
    </>
  );
};

export default LetterList;

const StPostView = styled.div`
  margin: auto;
`;

const StPostViewButton = styled.button`
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px;
`;
