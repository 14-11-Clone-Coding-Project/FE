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
import { useQuery, useMutation } from "react-query";
import { login } from "../core/api/auth/login";

function Login() {
  const navigate = useNavigate();
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation(login, {
    async onSuccess(data) {
      const { token , response} = data;
      // console.log("token= ", token);
      console.log(response);
      console.log('token= ', token);
      console.log("response.status= ", response.status);
      console.log("response.message= ", response.data.message);
      // navigate("/");
    },

    onError(error) {
      console.log(error);
    },
  });

  const onChangeMemberIdHandler = (e) => {
    setMemberId(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginhandler = () => {
    mutation.mutate({
      memberId,
      password,
    });

    //if user logged in navigate to /
    // navigate("/");
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
