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
import { useSelector } from "react-redux";

function Home() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const token = getCookie("Auth");

  const member = useSelector((state) => state.members[0]);
  console.log("member=> ", member);

  const onChangeMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = () => {
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
        type: "TALK",
        sender: newData.sender,
        message: newData.message,
      };
      return [...prev, newMessage];
    });
  };

  useEffect(() => {
    //토큰이 있을 경우
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
        <StChattingBox>
          <StChattingDisplay>
            {messages.map((message, index) => (
              <p
                style={{
                  color:
                    message.sender === message.sender
                      ? "var(--color-yellow)"
                      : "var(--color-green)",
                  fontSize: "20px",
                }}
                key={index}
              >
                {message.sender}: {message.message}
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
