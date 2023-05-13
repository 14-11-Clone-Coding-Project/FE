import React from "react";
import {
  StSignupContainer,
  StSignupnBox,
  StSignupContents,
  StSignupHeader,
  StInputBox,
  StInputIdBox,
  StInputId,
  StInputPassword,
  StButtonsBox,
} from "../styles/Signup.styles";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";
import { signup, duplicateId } from "../core/api/auth/signup";

function SignUp() {
  const navigate = useNavigate();

  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeMemberIdHandler = (e) => {
    setMemberId(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const mutation = useMutation(signup, {
    async onSuccess(data){
      console.log('data.status= ', data.status)
      console.log('data.message= ', data.data.message)
    },
    onError(error){
      console.log(error)
    }
  })

  // 중복 체크 함수 
  const duplicateMutation = useMutation(duplicateId, {
    async onSuccess(data) {
      console.log('data.status= ', data.status)
      console.log('data.message= ', data.data.message)
    },
    onError(error) {
      console.log(error)
    }
  })

  const duplicateIdHandler = () =>{
    duplicateMutation.mutate({memberId})
  }

  const signupHandler = () => {
    //if user logged in navigate to /login
    mutation.mutate({
      memberId,
      password
    })
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
            <StInputIdBox>
              <StInputId
                type="text"
                placeholder="아이디를 입력하세요"
                value={memberId}
                onChange={onChangeMemberIdHandler}
              />
              <Button height="100%" onClick={duplicateIdHandler}>중복확인</Button>
            </StInputIdBox>
            <StInputPassword
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={onChangePasswordHandler}
            />
          </StInputBox>

          <StButtonsBox>
            <Button
              width="100%"
              padding="10px"
              fontSize="var(--font-medium)"
              paddingBlock="15px"
              backgroundColor="rgba(0, 0, 0, 0.8)"
              border= "2px solid var(--color-red)"
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
