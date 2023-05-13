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
import { useCookies } from "react-cookie";

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
    async onSuccess(data) {
      if (data.status === 200) {
        alert("회원가입 되었습니다!");
      }
      // console.log("data.status= ", data.status);
      // console.log("data.message= ", data.data.message);
    },
    onError(error) {
      console.log("error >", error);
    },
  });

  // 중복 체크 함수
  const duplicateMutation = useMutation(duplicateId, {
    async onSuccess(data) {
      if (!memberId) return alert("아이디를 입력해주세요");
      if (data.status === 200) alert("사용가능한 아이디입니다");
      // console.log("data.status= ", data.status);
      // console.log("data.message= ", data.data.message);
    },
    onError(error) {
      console.log(error);
      alert("이미 사용중인 아이디입니다!");
    },
  });

  //중복된 아이디 체크 버튼
  const duplicateIdHandler = () => {
    duplicateMutation.mutate({ memberId });
  };

  //회원가입 버튼
  const signupHandler = () => {
    if (!memberId || !password) {
      return alert("아이디와 비밀번호를 적어주세요.");
    } else if (!duplicateMutation.isSuccess) {
      return alert("아이디 중복 체크를 해주세요.");
    } else {
      mutation.mutate({
        memberId,
        password,
      });
    }
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
              <Button height="100%" onClick={duplicateIdHandler}>
                중복확인
              </Button>
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
              border="2px solid var(--color-red)"
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
