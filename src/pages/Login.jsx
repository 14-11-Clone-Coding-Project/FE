import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StLoginContainer,
  StLoginBox,
  StLoginContents,
  StLoginHeader,
  StInputBox,
  StInputIdBox,
  StInputId,
  StInputPassword,
  StButtonsBox,
} from "../styles/Login.styles";
import Button from "../components/Button/Button";

function Login() {
  const navigate = useNavigate();

  const loginhandler = () => {
    //if user logged in navigate to /
    navigate("/");
    //else navigate to /signup
  };

  return (
    <StLoginContainer>
      <StLoginBox>
        <StLoginContents>
          <StLoginHeader>
            <h1>로그인</h1>
          </StLoginHeader>

          <StInputBox>
            <StInputIdBox>
              <StInputId type="text" placeholder="아이디를 입력하세요" />
              <Button height="100%">중복확인</Button>
            </StInputIdBox>
            <StInputPassword type="password" placeholder="비밀번호를 입력하세요" />
          </StInputBox>

          <StButtonsBox>
            <Button
              width="var(--size-extra-large)"
              fontSize="var(--font-medium)"
              padding="10px"
              paddingBlock="15px"
              backgroundColor="rgba(0, 0, 0, 0.8)"
              border= "2px solid var(--color-red)"
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
              border= "2px solid var(--color-red)"
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
