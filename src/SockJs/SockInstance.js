import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { getCookie } from "../Cookies/cookie";

let stompClient = null;

const connect = () => {
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
      //   console.log(frame);
      console.log("frame= 연결 성공");
      stompClient.subscribe("/sub/chat/room", function (message) {
        console.log(message.body.sender)
      });
    }
  );
};

// function showGreeting(message) {
//   alert(message);
// }

export { connect };

// var client = Stomp.over(function () {
//   return new WebSocket("ws://localhost:15674/ws");
// });
