import React, { useEffect, useState } from "react";
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
import { getCookie } from "../Cookies/cookie";
import { sendMessage, receivedMessage } from "../SockJs/SockInstance";

function Home() {
  const navigate = useNavigate();
  const token = getCookie("Auth");

  const [stompClient, setStompClient] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState([]);
  const [message, setMessage] = useState("");

  const onChangeMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = () => {
    sendMessage(message);
    setMessage("");
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [token]);

  useEffect(() =>{
    console.log(receivedMessage())
    receivedMessage()
  },[])

  return (
    <StHomeContainer>
      {/* left */}
      <StLeftBox>
        <StChattingBox>
          <StChattingDisplay>채팅창</StChattingDisplay>
          <StChattingInput>
            <StInput
              type="text"
              value={message}
              onChange={onChangeMessageHandler}
            />
            <Button
              width="20%"
              height="100%"
              fontSize="var(--font-medium)"
              backgroundColor="rgba(0, 0, 0, 0.8)"
              border="2px solid var(--color-red)"
              onClick={sendMessageHandler}
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
