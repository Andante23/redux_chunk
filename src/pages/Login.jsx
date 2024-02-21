import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../store/modules/authSlice";
import { useDispatch } from "react-redux";

function Login() {
  //  토글링에 사용되는  state변수
  const [isLogin, setIsLogin] = useState(true);

  // 회원가입 / 로그인 입력값을 인식할수 있는  state변수
  const [idea, setIdea] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");

  // 로그인이 성공하면 Home 페이지로 이동하게끔 하기
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 버튼에 따라 로그인 / 회원가입 창으로 토글링되게하는 함수
  const toggleFormButtonClick = () => {
    setIsLogin(!isLogin);
  };

  // 주어진 jwt 서버를 이용해서 회원가입을 실행하는 함수
  const joinButtonClick = async (event) => {
    event.preventDefault();

    try {
      const joinData = { id: idea, password: pw, nickname: nickName };

      const res = await axios.post(
        `https://moneyfulpublicpolicy.co.kr/register`,
        joinData
      );

      setIsLogin(!isLogin);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // 주어진 jwt 서버를 이용해서 로그인을 실행하는 함수
  const loginButtonClick = async (event) => {
    event.preventDefault();

    try {
      const loginData = { id: idea, password: pw };
      const res = await axios.post(
        `https://moneyfulpublicpolicy.co.kr/login`,
        loginData
      );

      console.log("res", res);
      console.log("res의data의accessToken", res.data.accessToken);

      if (res.data.accessToken) {
        localStorage.setItem("nickname", res.data.nickname);
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("avatar", res.data.avatar);
      }

      // dispatch를 이용해서 현재 리덕스 스토어 내의 로그인 값 변경
      // 그와 동시에 라우터 값 false -> true 변경
      dispatch(login(true));

      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      {isLogin ? (
        <div>
          <h1>로그인</h1>
          <form onSubmit={loginButtonClick}>
            <input
              type="text"
              placeholder="아이디"
              minLength={4}
              maxLength={10}
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="비밀번호"
              minLength={4}
              maxLength={15}
              value={pw}
              onChange={(event) => setPw(event.target.value)}
            />
            <br />
            <button>로그인</button>
            <br />
            <span onClick={toggleFormButtonClick}>
              <u>회원가입</u>창으로
            </span>
          </form>
        </div>
      ) : (
        <div>
          <h1>회원가입</h1>
          <form onSubmit={joinButtonClick}>
            <input
              type="text"
              minLength={4}
              maxLength={10}
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
              placeholder="아이디"
            />
            <br />
            <input
              type="text"
              minLength={4}
              maxLength={15}
              value={pw}
              onChange={(event) => setPw(event.target.value)}
              placeholder="비밀번호"
            />
            <br />
            <input
              type="text"
              minLength={1}
              maxLength={10}
              placeholder="닉네임"
              value={nickName}
              onChange={(event) => setNickName(event.target.value)}
            />
            <br />

            <button>회원가입</button>
            <br />
          </form>
          <u onClick={toggleFormButtonClick}>로그인창</u>으로
        </div>
      )}
    </>
  );
}

export default Login;
