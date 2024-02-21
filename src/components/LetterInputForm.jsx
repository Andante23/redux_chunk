import LetterList from "./LetterList";
import useForm from "hooks/useForm";
import styled from "styled-components";

/*LetterForm : 편지 입력폼 컴포넌트 */
export function LetterInputForm() {
  //  form 에 의존하는 입력 , 셀렉트박스 코드줄이 길어서  useForm인  커스텀 혹 이용
  const {
    nickname,
    content,
    selectValue,
    onChangeContent,
    onChangeSelect,
    onSubmitInputForm,
  } = useForm();

  return (
    <>
      <StLetterForm>
        <StLetterInputDisplay>
          {/* nickname의  맨앞 과 맨끝의 "을  slice 메서드를 이용해서 제거해줌  */}
          <b>{nickname}</b>
          <br />
          <StLetterFormTextArea
            type="text"
            name="content"
            value={content}
            onChange={onChangeContent}
            placeholder="100글자를 입력해주세요"
            maxLength={100}
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
