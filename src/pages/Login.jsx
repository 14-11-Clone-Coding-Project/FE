import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StLoginContainer,
  StLoginBox,
  StLoginContents,
  StLoginHeader,
  StInputBox,
  StInput,
  StButtonsBox,
} from "../styles/Login.styles";
import Button from "../components/Button/Button";
import { useMutation } from "react-query";
import { login } from "../core/api/auth/login";
import { useCookies } from "react-cookie";
import { connectClient } from "../SockJs/SockInstance";
import { useDispatch } from "react-redux";
import { setMember } from "../redux/modules/members";

function Login() {
  const navigate = useNavigate();
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [cookies, setCookie, removeCookie, getCookie] = useCookies();

  const mutation = useMutation(login, {
    async onSuccess(data) {
      const { response, token, memberId } = data;
      // console.log("token= ", token);
      // console.log("response= ", response);
      console.log("memberId= ", memberId);
      dispatch(setMember(memberId));
      // const expireTime = new Date(new Date().getTime() + 30 * 60 * 1000);
      setCookie("Auth", token, { path: "/" });
      alert("로그인 완료되었습니다.");
      //연결 로직
      connectClient();
      navigate("/");
    },
    onError(error) {
      alert("아이디/비밀번호가 일치하지 않습니다!");
    },
  });

  const onChangeMemberIdHandler = (e) => {
    setMemberId(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginhandler = () => {
    if (!memberId || !password) {
      alert("아이디와 비밀번호를 입력해주세요");
    } else {
      mutation.mutate({
        memberId,
        password,
      });
    }
  };

  return (
    <StLoginContainer>
      <StLoginBox>
        <StLoginContents>
          <StLoginHeader>
            <h1>로그인</h1>
          </StLoginHeader>

          <StInputBox>
            <StInput
              type="text"
              placeholder="아이디를 입력하세요"
              value={memberId}
              onChange={onChangeMemberIdHandler}
            />
            <StInput
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={onChangePasswordHandler}
            />
          </StInputBox>

          <StButtonsBox>
            <Button
              width="var(--size-extra-large)"
              fontSize="var(--font-medium)"
              padding="10px"
              paddingBlock="15px"
              backgroundColor="rgba(0, 0, 0, 0.8)"
              border="2px solid var(--color-red)"
              onClick={loginhandler}
            >
              로그인
            </Button>
            <Button
              width="var(--size-extra-large)"
              padding="10px"
              fontSize="var(--font-medium)"
              paddingBlock="15px"
              backgroundColor="rgba(0, 0, 0, 0.8)"
              border="2px solid var(--color-red)"
              onClick={() => navigate("/signup")}
            >
              회원가입
            </Button>
          </StButtonsBox>
        </StLoginContents>
      </StLoginBox>
    </StLoginContainer>
  );
}

export default Login;
