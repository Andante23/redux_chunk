import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addZanNaBiLetter } from "store/modules/znbFanSlice";

import { v4 as uuidv4 } from "uuid";
import LetterList from "./LetterList";

import styled from "styled-components";

/*LetterForm : 편지 입력폼 컴포넌트 */
export function LetterInputForm() {
  /*
    nickname , content : 입력값 저장 
    selectValue : selectBox의 option  값 저장
    dispatch : 중앙 저장소 store에 데이터 저장할때 쓰려고
  */
  const [nickname, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [selectValue, setSelectValue] = useState("최정훈");
  const dispatch = useDispatch();

  /*
   onChangeSelect : 셀렉트 박스에서 얻은 값을 저장하는 함수
   onChangeNickName : nickname 인풋에서 얻은 값을 저장하는 함수
   onChangeContent : content 인풋에서 얻은 값을 저장하는 함수 
   onSubmitInputForm : 입력값을 최종적으로  redux 중앙저장소에 저장하는 함수 
*/
  const onChangeSelect = (event) => setSelectValue(event.target.value);

  const onChangeNickName = (event) => setNickName(event.target.value);

  const onChangeContent = (event) => setContent(event.target.value);

  const onSubmitInputForm = (event) => {
    // 기본 동작 방지
    event.preventDefault();

    // toLocaleDateString에 쓰이는  두번째 매개변수 option
    const option = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    /* 
     inputDataInfo : store에 저장되는 데이터들
     createdAt : 현재 서비스 되는 한국 시간대로 지정
     uuidv4 라이브러리를 이용해서 고유한 값 부여 
     */
    const inputDataInfo = {
      createdAt: new Date().toLocaleDateString("ko-kr", option),
      nickname,
      content,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
      writedTo: selectValue,

      id: uuidv4(),
    };

    // 만약 nickname ,content가 공백으로 입력받으면
    // trim을 통해 < 스페이스 4번 > 상태도.....입력 x
    if (nickname.trim() === "" && content.trim() === "") {
      //  경고 후~~~
      alert("입력란을 모두 입력해주세요");
      setNickName("");
      setContent("");
      //   입력 못받게 하기
      return;
    }

    // 레터를 추가하겠습니까? 라고 사용자에게 물어보는 내용
    const isAdd = window.confirm("레터를 추가하겠습니까?");
    if (isAdd === true) {
      dispatch(addZanNaBiLetter(inputDataInfo));
      setNickName("");
      setContent("");
    } else {
      alert("취소하였습니다");
      setNickName("");
      setContent("");
      return;
    }
  };

  return (
    <>
      <StLetterForm>
        <StLetterInputDisplay>
          <StLetterFormInput
            type="text"
            name="nickname"
            value={nickname}
            onChange={onChangeNickName}
            placeholder="닉네임"
            required
          />
          <br />
          <StLetterFormTextArea
            type="text"
            name="content"
            value={content}
            onChange={onChangeContent}
            placeholder="내용"
            required
          />
          <br />
        </StLetterInputDisplay>

        <StLetterFormOption>
          <select
            name="zanabi"
            onChange={onChangeSelect}
            value={selectValue}
            required
          >
            <option value="최정훈">최정훈</option>
            <option value="김도형">김도형</option>
          </select>

          <StLetterFormOptionButton type="submit" onClick={onSubmitInputForm}>
            추가하기
          </StLetterFormOptionButton>
        </StLetterFormOption>
      </StLetterForm>

      <LetterList />
    </>
  );
}

// LetterInputForm 컴포넌트
const StLetterForm = styled.form`
  margin: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StLetterInputDisplay = styled.div`
  margin: auto;
`;

const StLetterFormInput = styled.input`
  padding: 5px;
  width: 900px;
`;

const StLetterFormTextArea = styled.textarea`
  padding: 5px;
  margin-top: 10px;
  width: 900px;
  height: 400px;
`;

const StLetterFormOption = styled.div`
  margin-left: 750px;
  margin-top: 10px;
`;

const StLetterFormOptionButton = styled.button`
  margin: 10px;
  padding: 10px;
  border-color: #0b69d4;
  background-color: #0b69d4;
  border-radius: 10px;
  color: white;

  &:hover {
    background-color: #0680c2;
    border-color: #0680c2;
    cursor: pointer;
  }
`;
