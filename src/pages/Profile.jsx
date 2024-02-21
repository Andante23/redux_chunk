import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Profile() {
  const { avatar, nickname, userId } = useSelector((state) => state.letter);

  // 수정모드 비활성화 활성화
  // const [isEditing, setIsEditing] = useState(false);
  // const [editedContent, setEditedContent] = useState();
  // const [uploadUrl , setUploadUrl] = useState("")

  // const onClickProfileUpdateButtonClick = async (event) => {

  //   await axios.patch('http://localhost:5000/letters',
  //        {
  //          "avatar" : uploadUrl
  //          "nickname" : editedContent
  //        },
  //        {
  //         "Authorization":"Bearer AccessToken"
  //        }

  //   )
  // }

  // const handleEdit = () => setIsEditing(true);

  return (
    <>
      {
        <div>
          <StProfileImg src={avatar} alt="" /> <br />
          <b>{nickname}</b>
          <p>{userId}</p>
          <button onClick={id}>수정하기</button>
        </div>
      }
    </>
  );
}

export default Profile;

const StProfileImg = styled.img`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;
