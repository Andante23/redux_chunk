import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Profile() {
  const { avatar, nickname, userId } = useSelector((state) => state.letter);

  // const select = useSelector((state) => state);

  const token = localStorage.getItem("token");
  // 이미지 변경 state
  const [imageSrc, setImageSrc] = useState(avatar);

  // 프로필 이름 변경 state
  const [editedContent, setEditedContent] = useState("");

  // 이미지 , 프로필 변경 여부를 가리는 불리언 state
  const [isEditing, setIsEditing] = useState(false);

  // 수정모드 활성화
  const onEdit = () => {
    setIsEditing(true);
  };

  // 수정모드 비활성화
  const onEditCancel = () => {
    setIsEditing(false);
  };

  const onSave = async () => {
    await axios.patch(
      `https://moneyfulpublicpolicy.co.kr/profile`,
      { avatar: imageSrc, nickname: editedContent },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  return (
    <>
      {/*  현재 이용자의 프로필 정보만 나타낸 것임  */}
      <div>
        {isEditing ? (
          <textarea
            defaultValue={nickname}
            onChange={(e) => {
              setEditedContent(e.target.value);
            }}
          />
        ) : (
          <p>{nickname}</p>
        )}

        {isEditing ? (
          <>
            <button onClick={onSave}>확인</button>
            <button onClick={onEditCancel}>취소</button>
          </>
        ) : (
          <>
            <button onClick={onEdit}>수정하기</button>
          </>
        )}
      </div>
    </>
  );
}

export default Profile;

const StProfileImg = styled.img`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;
