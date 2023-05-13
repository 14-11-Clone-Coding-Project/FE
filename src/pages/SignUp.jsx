import React from "react";
import {
  StSignupContainer,
  StSignupnBox,
  StSignupContents,
  StSignupHeader,
  StInputBox,
  StInput,
  StButtonsBox,
} from "../styles/Signup.styles";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const signupHandler = () => {
    //if user logged in navigate to /login
    navigate("/login");
  };

  return (
    <StSignupContainer>
      <StSignupnBox>
        <StSignupContents>
          <StSignupHeader>
            <h1>회원가입</h1>
          </StSignupHeader>

          <StInputBox>
            <StInput type="text" placeholder="아이디를 입력하세요" />
            <StInput type="password" placeholder="비밀번호를 입력하세요" />
          </StInputBox>

          <StButtonsBox>
            <Button
              width="100%"
              padding="10px"
              fontSize="var(--font-medium)"
              paddingBlock="15px"
              onClick={signupHandler}
            >
              회원가입
            </Button>
          </StButtonsBox>
        </StSignupContents>
      </StSignupnBox>
    </StSignupContainer>
  );
}

export default SignUp;
