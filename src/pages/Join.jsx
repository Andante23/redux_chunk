import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Join() {
  const [joinIdea, setJoinIdea] = useState("");
  const [joinPw, setJoinPw] = useState("");
  const [joinNickName, setJoinNickName] = useState("");

  return (
    <>
      <div>
        <h1>회원가입</h1>
        <form>
          <input
            type="text"
            minLength={4}
            maxLength={10}
            placeholder="아이디"
            onChange={(e) => {
              setJoinIdea(e.target.value);
            }}
            value={joinIdea}
          />
          <input
            type="text"
            minLength={4}
            maxLength={15}
            placeholder="비밀번호"
            onChange={(e) => {
              setJoinPw(e.target.value);
            }}
            value={joinPw}
          />
          <input
            type="text"
            minLength={1}
            maxLength={10}
            placeholder="닉네임"
            onChange={(e) => {
              setJoinNickName(e.target.value);
            }}
            value={joinNickName}
          />

          <button>회원가입</button>
        </form>
        <Link to={"/login"}>to 로그인</Link>
      </div>
    </>
  );
}

export default Join;
