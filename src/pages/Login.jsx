import React from "react";
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

function Login() {
  const navigate = useNavigate();
  
  const loginhandler = () =>{
    //if user logged in navigate to /
    navigate("/")
    //else navigate to /signup
  }

  return (
    <StLoginContainer>
      <StLoginBox>
        <StLoginContents>
          <StLoginHeader>
            <h1>로그인</h1>
          </StLoginHeader>

          <StInputBox>
            <StInput type="text" placeholder="아이디를 입력하세요"/>
            <StInput type="password" placeholder="비밀번호를 입력하세요"/>
          </StInputBox>

          <StButtonsBox>
            <Button
              width="var(--size-extra-large)"
              fontSize="var(--font-medium)"
              padding="10px"
              paddingBlock="15px"
              onClick={loginhandler}
            >
              로그인
            </Button>
            <Button
              width="var(--size-extra-large)"
              padding="10px"
              fontSize="var(--font-medium)"
              paddingBlock="15px"
              onClick={()=> navigate("/signup")}
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
