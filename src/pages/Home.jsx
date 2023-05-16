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
import { connectClient, sendMessage } from "../SockJs/SockInstance";

function Home() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const token = getCookie("Auth");

  const member = JSON.parse(localStorage.getItem("sender"));

  const onChangeMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();
    sendMessage({
      sender: member,
      message,
    });
    setMessage("");
  };

  const receivedMessage = (data) => {
    console.log("data.body*********", data.body); //JSON 형식
    const newData = JSON.parse(data.body); //문자열을 파싱하여 JS 객체로 변환
    console.log("newData=> ", newData);
    setMessages((prev) => {
      const newMessage = {
        sender: newData.sender,
        message: newData.message,
        sys: newData.sys,
      };
      return [...prev, newMessage];
    });
  };

  useEffect(() => {
    //토큰이 있을 경우 서버 연결
    if (token) {
      connectClient(receivedMessage);
    } else {
      navigate("/login");
    }
  }, [token]);

  // console.log(messages);

  return (
    <StHomeContainer>
      {/* left */}
      <StLeftBox>
        <StChattingBox onSubmit={sendMessageHandler}>
          <StChattingDisplay>
            {messages.map((message, index) => (
              <p
                style={{
                  color:
                    message.sender === member
                      ? "var(--color-green)"
                      : "var(--color-yellow)",
                  fontSize: "20px",
                }}
                key={index}
              >
                {message.sys
                  ? message.message
                  : `${message.sender}: ${message.message}`}
              </p>
            ))}
          </StChattingDisplay>
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
