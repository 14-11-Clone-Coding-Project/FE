import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { getCookie } from "../Cookies/cookie";

let stompClient = null;

const connectClient = (receivedMessage) => {
  const socket = new SockJS("http://13.125.188.38:8080/ws-edit");
  stompClient = Stomp.over(() => socket);
  stompClient.connect(
    {
      headers: {
        access_key: getCookie("Auth"),
      },
    },
    //WebSocket 연결이 성공했을 때 실행될 콜백 함수 -> frame 매개변수는 연결에 대한 정보를 담은 STOMP 프로토콜 프레임.
    function (frame) {
      console.log("frame= 연결 성공");

      stompClient.subscribe("/sub/chat/room", receivedMessage);
    }
  );
};

const sendMessage = async (payload) => {
  const text = {
    type: "TALK",
    sender: payload.sender,
    message: payload.message,
  };

  await stompClient.send("/pub/chat/send", {}, JSON.stringify(text));
};


export { connectClient, sendMessage };

// var client = Stomp.over(function () {
//   return new WebSocket("ws://localhost:15674/ws");
// });
