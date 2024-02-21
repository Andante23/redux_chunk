import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  __deleteZanNaBiLetter,
  __getZanNaBiLetter,
  __updateZanNaBiLetter,
} from "store/modules/znbFanSlice";
import { GlobalStyle } from "Style/GlobalStyle";

import styled from "styled-components";

const DetailPage = () => {
  /*
    id : 다이나믹 라우팅에서 받은 id값   
    navigate :  Home페이지로 이동
    isEditing : 수정모드 활성화 / 비활성화 
    editedContent : 수정된는 글 말하는 거임 
    letterData : 리덕스 스토어에서 받아온 전체 팬 레터 데이터
    dispatch : 삭제와 수정 할려고 사용한거임 
  */
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const { letters } = useSelector((state) => state.znabi);

  const dispatch = useDispatch();

  /*
   handleSave : 글 수정하는 함수
   handleDelete : 글 삭제하는 함수
   handleEdit : 수정모드 활성화
   handleCancelEdit : 수정모드 비활성화 
  */
  const handleSave = () => {
    const isUpdate = window.confirm("수정하시겠습니까?");

    if (isUpdate) {
      dispatch(__updateZanNaBiLetter({ id, editedContent }));
      setIsEditing(false);
      setEditedContent("");
      alert("수정되었습니다.");
      navigate("/");
    } else {
      // 수정 에디터 활성화 된 상태로 두기
      setIsEditing(true);
    }
  };

  useEffect(() => {
    dispatch(__getZanNaBiLetter());
  }, [dispatch]);

  const handleDelete = (id) => {
    // 삭제 validation 체크
    const isDelete = window.confirm("삭제하시겠습니까?");
    if (isDelete === true) {
      dispatch(__deleteZanNaBiLetter(id));
      navigate("/");
    } else {
      alert("삭제 취소되었습니다");
      return;
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    dispatch(__getZanNaBiLetter());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {letters
        .filter((letter) => letter.id === id)
        .map((letter) => {
          return (
            <>
              <div>
                <GlobalStyle />

                <b>{letter.createdAt}</b>
                <p>{letter.nickname}</p>

                {isEditing ? (
                  <StLetterText
                    defaultValue={letter.content}
                    onChange={(e) => {
                      setEditedContent(e.target.value);
                    }}
                  />
                ) : (
                  <p>{letter.content}</p>
                )}

                <StLetterCardOptionButton>
                  {isEditing ? (
                    <>
                      <StLetterCardSave onClick={handleSave}>
                        저장하기
                      </StLetterCardSave>
                      <StLetterCardCancel onClick={handleCancelEdit}>
                        취소하기
                      </StLetterCardCancel>
                    </>
                  ) : (
                    <>
                      <StLetterCardDelete
                        onClick={() => {
                          handleDelete(letter.id);
                        }}
                        disabled={!letter.userId === userId}
                      >
                        삭제하기
                      </StLetterCardDelete>
                      <StLetterCardUpdate
                        onClick={handleEdit}
                        disabled={!letter.userId === userId}
                      >
                        수정하기
                      </StLetterCardUpdate>
                    </>
                  )}
                </StLetterCardOptionButton>
              </div>
            </>
          );
        })}
    </>
  );
};
export default DetailPage;

const StLetterText = styled.textarea`
  width: 1200px;
  height: 500px;
  margin-top: 20px;
  margin-left: 500px;
  border-radius: 5px;
`;
const StLetterCardOptionButton = styled.div`
  margin-top: 50px;
  margin-left: 1400px;
`;
const StLetterCardSave = styled.button`
  margin-right: 10px;
  border-radius: 5px;
`;
const StLetterCardCancel = styled.button`
  border-radius: 5px;
`;
const StLetterCardDelete = styled.button`
  margin-right: 10px;
  border-radius: 5px;
`;
const StLetterCardUpdate = styled.button`
  border-radius: 5px;
`;
