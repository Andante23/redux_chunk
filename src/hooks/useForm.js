import { __addZanNaBiLetter } from "store/modules/znbFanSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function useForm() {
  const { avatar, userId, nickname } = useSelector((state) => state.letter);
  // console.log(avatar, userId, nickname);
  /*
    nickname , content : 입력값 저장 
    selectValue : selectBox의 option  값 저장
    dispatch : 중앙 저장소 store에 데이터 저장할때 쓰려고
  */

  const [content, setContent] = useState("");
  const [selectValue, setSelectValue] = useState("최정훈");
  const dispatch = useDispatch();

  /*
   onChangeSelect : 셀렉트 박스에서 얻은 값을 저장하는 함수
   onChangeContent : content 인풋에서 얻은 값을 저장하는 함수 
   onSubmitInputForm : 입력값을 최종적으로  redux 중앙저장소에 저장하는 함수 
*/
  const onChangeSelect = (event) => setSelectValue(event.target.value);
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
      avatar,
      userId,
      writedTo: selectValue,
      id: uuidv4(),
      avatar,
    };

    // 만약 nickname ,content가 공백으로 입력받으면
    // trim을 통해 < 스페이스 4번 > 상태도.....입력 x
    if (nickname.trim() === "" && content.trim() === "") {
      alert("입력란을 모두 입력해주세요");

      setContent("");
      //   입력 못받게 하기
      return;
    }

    // 레터를 추가하겠습니까? 라고 사용자에게 물어보는 내용
    const isAdd = window.confirm("레터를 추가하겠습니까?");
    if (isAdd === true) {
      dispatch(__addZanNaBiLetter(inputDataInfo));

      setContent("");
    } else {
      alert("취소하였습니다");

      setContent("");
      return;
    }
  };

  return {
    nickname,
    content,
    selectValue,
    onChangeContent,
    onChangeSelect,
    onSubmitInputForm,
  };
}

export default useForm;
