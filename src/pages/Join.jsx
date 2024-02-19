import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Join() {
  const [idea, setIdea] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");

  return (
    <>
      <form>
        <input
          type="text"
          minLength={4}
          maxLength={10}
          placeholder="아이디"
          onChange={(e) => {
            setIdea(e.target.value);
          }}
          value={idea}
        />
        <input
          type="text"
          minLength={4}
          maxLength={15}
          placeholder="비밀번호"
          onChange={(e) => {
            setPw(e.target.value);
          }}
          value={pw}
        />
        <input
          type="text"
          minLength={1}
          maxLength={10}
          placeholder="닉네임"
          onChange={(e) => {
            setNickName(e.target.value);
          }}
          value={nickName}
        />

        <button>join</button>
      </form>
    </>
  );
}

export default Join;
