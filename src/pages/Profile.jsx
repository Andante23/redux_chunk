import { useSelector } from "react-redux";
import styled from "styled-components";
import { __editProfile } from "redux/modules/authSlice";

function Profile() {
  const { avatar, nickname, userId } = useSelector((state) => state.letter);

  return (
    <>
      {
        <div>
          <StProfileImg src={avatar} alt="" /> <br />
          <b>{nickname}</b>
          <p>{userId}</p>
          <button>수정하기</button>
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
