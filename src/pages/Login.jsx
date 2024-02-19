import { useNavigate } from "react-router-dom";

function Login() {
  const navi = useNavigate();

  const goToJoin = () => {
    navi("join");
  };

  return (
    <>
      <h1>로그인</h1>
      <form>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비밀번호" />
        <button>login</button>
      </form>
      <button onClick={goToJoin}>join</button>
    </>
  );
}

export default Login;
