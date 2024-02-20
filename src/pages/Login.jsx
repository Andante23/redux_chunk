import { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <div>
          <h1>로그인</h1>
          <form>
            <input
              type="text"
              placeholder="아이디"
              minLength={4}
              maxLength={10}
            />
            <input
              type="text"
              placeholder="비밀번호"
              minLength={4}
              maxLength={15}
            />
          </form>
          <button>로그인</button>
          <span onClick={toggleForm}>회원가입창으로</span>
        </div>
      ) : (
        <div>
          <h1>회원가입</h1>
          <form>
            <input
              type="text"
              minLength={4}
              maxLength={10}
              placeholder="아이디"
            />
            <input
              type="text"
              minLength={4}
              maxLength={15}
              placeholder="비밀번호"
            />
            <input
              type="text"
              minLength={1}
              maxLength={10}
              placeholder="닉네임"
            />

            <button>회원가입</button>
          </form>
          <span onClick={toggleForm}>로그인창으로</span>
        </div>
      )}
    </>
  );
}

export default Login;
