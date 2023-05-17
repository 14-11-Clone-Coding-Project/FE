import React, { useEffect, useState, useRef } from "react";
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
import {
  connectClient,
  sendMessage,
  disconnectClient,
} from "../SockJs/SockInstance";
import audio from "../audio/main.mp3";

function Home() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [memberList, setMemberList] = useState([]);
  const chatDisplayRef = useRef(null);

  const navigate = useNavigate();
  const token = getCookie("Auth");

  const member = JSON.parse(localStorage.getItem("sender"));

  const onChangeMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();
    // Input 막기   
    if (message.trim() === "") {
      return;
    }
    sendMessage({
      sender: member,
      message,
    });
    setMessage("");
  };

  const getChattingData = (data) => {
    // console.log("data.body*********", data.body); //JSON 형식
    const newData = JSON.parse(data.body); //문자열을 파싱하여 JS 객체로 변환
    console.log("newData=> ", newData);

    if (newData.chatUserList) {
      const newMembers = newData.chatUserList.filter((user) => !memberList.includes(user));
      setMemberList((prevMembers) => [...prevMembers, ...newMembers]);
    }

    setMemberList(newData.chatUserList);

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
      connectClient(getChattingData);
    } else {
      navigate("/start");
    }
  }, []);

  // 메시지가 추가될 때마다 자동 스크롤
  useEffect(() => {
    const chatDisplayElement = chatDisplayRef.current;
    chatDisplayElement.scrollTop = chatDisplayElement.scrollHeight;
  }, [messages]);

  return (
    <StHomeContainer>
      {/* <audio src={audio} loop autoPlay /> */}
      {/* left */}
      <StLeftBox>
        <StChattingBox onSubmit={sendMessageHandler}>
          <StChattingDisplay ref={chatDisplayRef}>
            {messages.map((message, index) => (
              <p
                style={{
                  marginBottom: "10px",
                  color:
                    message.sender === member
                      ? "var(--color-green)"
                      : "var(--color-yellow)",
                  fontSize: "20px",
                }}
                key={index}
              >
                {message.sys ? (
                  <span style={{ color: "white" }}>{message.message}</span>
                ) : (
                  `${message.sender}: ${message.message}`
                )}
              </p>
            ))}
          </StChattingDisplay>
          <StChattingInput>
            <StInput
              type="text"
              value={message}
              placeholder=">"
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
          {memberList.map((member, index) => {
            return (
              <ul key={index}>
                <li>{member}</li>
              </ul>
            );
          })}
        </StUserList>

        <StButtonsBox>
          <Button
            width="50%"
            height="100%"
            fontSize="var(--font-medium)"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            border="2px solid var(--color-red)"
            onClick={() => {
              disconnectClient();
              setTimeout(() => {
                navigate("/login");
              }, 700);
            }}
          >
            나가기
          </Button>
        </StButtonsBox>
      </StRightBox>
    </StHomeContainer>
  );
}

export default Home;
