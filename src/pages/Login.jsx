import { useState } from "react";
import { Link } from "react-router-dom";
import Join from "../pages/Join";
function Login() {
  const [idea, setIdea] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");

  // login창에서 join을 클릭하면 -> login 비활성화  , join 활성화
  // join창에서 login을 클릭하면 -> join 비활성화 , login 활성화

  const [selectState, setSelectState] = useState("none");

  const toggleJoinPage = () => {
    setSelectState("block");
  };

  return (
    <>
      {/* login */}
      <div>
        <h1>로그인</h1>
        <form>
          <input
            type="text"
            placeholder="아이디"
            value={idea}
            onChange={(e) => {
              setIdea(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </form>
        <button>join</button>
        <Link to={"/join"}>to 회원가입</Link>
      </div>

      {/* join */}
      <Join />
    </>
  );
}

export default Login;
