import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StHomeContainer,
  StLeftBox,
  StRightBox,
  StChattingBox,
  StChattingDisplay,
  StChattingInput,
  StInput,
  StUserList,
  StButtonsBox,
} from "../styles/Home.styles";
import Button from "../components/Button/Button";
import { useCookies } from "react-cookie";
import { connect } from "../SockJs/SockInstance";

function Home() {
  const navigate = useNavigate();
  const [cookies] = useCookies("Auth");
  const token = cookies.Auth;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [token]);

  return (
    <StHomeContainer>
      {/* left */}
      <StLeftBox>
        <StChattingBox>
          <StChattingDisplay>
            <h1>채팅창</h1>
          </StChattingDisplay>
          <StChattingInput>
            <StInput />
            <Button
              width="20%"
              height="100%"
              fontSize="var(--font-medium)"
              backgroundColor="rgba(0, 0, 0, 0.8)"
              border="2px solid var(--color-red)"
            >
              전송
            </Button>
          </StChattingInput>
        </StChattingBox>
      </StLeftBox>

      {/* right */}
      <StRightBox>
        <StUserList>
          <h1>유저리스트</h1>
          <ul>
            <li>user1</li>
            <li>user2</li>
            <li>user3</li>
          </ul>
        </StUserList>

        <StButtonsBox>
          <Button
            width="50%"
            height="45%"
            fontSize="var(--font-medium)"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            border="2px solid var(--color-red)"
          >
            버그신고
          </Button>
          <Button
            width="50%"
            height="45%"
            fontSize="var(--font-medium)"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            border="2px solid var(--color-red)"
          >
            로그아웃
          </Button>
        </StButtonsBox>
      </StRightBox>
    </StHomeContainer>
  );
}

export default Home;
