import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* LetterList : 선택한 아티스트에 따라 리스트를 보여주는 컴포넌트  */
const LetterList = () => {
  /*
    buttonValue : 아티스트별 게시물보여줄때 버튼 값
    navigate : 페이지 이동
    allZnbData : 잔나비 팬레터 데이터
    onClickArtistViewPostButton : 선택한 아티스트에따라 게시글이 보여지게 하는 함수 
   */
  const [buttonValue, setButtonValue] = useState("최정훈");
  const navigate = useNavigate();
  const { znabi } = useSelector((state) => state);
  // console.log(znabi);
  const handleArtistPostViewClick = (selectValue) =>
    setButtonValue(selectValue);

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

      {/* 
          1. 모든 잔나비 팬 레터데이터에서 내가 선택한 버튼값에 따른  새 배열 생성
          2. map을 통해서 반복문 돌리기!!!!!
     */}

      {znabi.filter((ld) => ld.writedTo === buttonValue).length !== 0 ? (
        <div>
          {znabi
            .filter((ld) => ld.writedTo === buttonValue)
            .map((ld) => {
              return (
                <StFilTerCardBorder>
                  <StFilTerCardItem>
                    <StFilTerCardItemHeroImage
                      src={ld.avatar}
                      alt="대체 이미지"
                    />

                    <p>
                      <p>{ld.nickname}</p>
                      <p>{ld.content.slice(0, 50) + "..."}</p>

                      <StToThePage
                        onClick={() => {
                          navigate(`/detail/${ld.id}`);
                        }}
                      >
                        더 보기
                      </StToThePage>
                    </p>
                  </StFilTerCardItem>
                </StFilTerCardBorder>
              );
            })}
        </div>
      ) : (
        <>
          <StNodataPage>
            <StNoDataWho>{buttonValue}</StNoDataWho>에 해당하는 값이 없습니다.
          </StNodataPage>
        </>
      )}
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
