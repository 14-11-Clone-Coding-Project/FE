# Clone Project

## 항해99 14기 클론코딩 - 11조

![image 복사본](https://github.com/14-11-Clone-Coding-Project/FE/assets/112850163/7c34c1c5-2b83-454d-9f75-667649e5656d)

# ✨ Github

- **FE:** https://github.com/14-11-Clone-Coding-Project/FE
- BE: https://github.com/14-11-Clone-Coding-Project/BE

# ✨ 항해99 14기 11조 클론코딩 - **StarCraft Chatting**

- 스타크래프트 단체 채팅으로 같이 이야기를 나누는 공간입니다.

# 📲 서비스 주요기능

- STOMP 프로토콜을 사용하여 채팅을 구현했습니다.
- 브라우저에서 서버로 메시지를 보내고 서버에서 브라우저로 메시지를 받을 수 있습니다.
- 브라우저에서 WebSocket을 열고, 브라우저에서 서버로 CONNECT 명령을 보내고 연결을 설정합니다. 그런 다음 브라우저에서 서버로 SEND 명령을 보내 메시지를 보낼 수 있습니다. 서버에서 브라우저로 SUBSCRIBE 명령을 보내 메시지를 받을 수 있습니다.
- 욕설 필터를 구현했습니다. 채팅방에 입장해서 욕설을 입력하면 "*"로 나타납니다.

# 🤔 기술적 의사 결정

사용 기술	결정 이유
TypeScript	인자값을 전송할때 타입오류를 방지하고 타입선언시 자동완성 기능을 위해 채택했습니다.
[안정성]
TypeScript는 정적 타입 언어, 컴파일 언어라는 두 가지 특징을 가지고 있어, 안정성이 높고 에러가 발생할 수 있는 경우를 미연에 방지해주는 이점이 있어 채택하게 되었습니다.
[표현력]
타입이라는 추가적인 개념을 통해 TypeScript는 JavaScript로는 할 수 없는 다양한 표현을 할 수 있습니다. 타입을 보고도 이 코드가 “무엇을 한다”를 확인할 수 있어 다른 사람이 작성한 코드를 이해하는 데에 리소스가 적게 들어가게 되고, 유지보수도 쉬워지는 이점이 있어 채택하게 되었습니다.
Vite	번들링, 빌드 시간 단축, 작은 용량 이점으로 CRA webpack을 대체하여 채택했습니다.
react-query	[클라이언트 데이터와 서버 데이터 분리]
클라이언트 사이드 데이터가 아닌 서버 사이드 데이터 관리를 더 원활하게 하기위해 채택했습니다.
[추가 기능 이점, 유지보수 개선]
길게 작성해야 하는 기존 코드들을 짧은 코드로 대체하여 복잡한 설정없이 사용을 용이하게 해주고, 데이터 관리 및 캐싱도 효율적으로 관리가 가능한 이점이 있습니다. 또한 데이터 업데이트 및 지연 로딩, 메모리 관리 등 옵션들을 통해 유지보수를 개선해주기 때문에 채택했습니다.
Recoil	[동시성 모드 지원]
비동기 처리를 기반으로 만들어져 동시성 모드를 지원하기 때문에 채택했습니다.
Redux처럼 별도의 action이나 reducer 등을 필요로 하지 않아 가벼운 보일러 플레이트로 전역적인 상태 관리가 가능하여 채택하게 되었습니다.
CloudFront	사용자에게 제공되는 정적 컨텐츠의 전송 속도를 높이고 HTTPS를 적용하기 위해 채택했습니다.

# 📌 트러블슈팅

## FE

### 채팅 증가 에러

리액트에서 변경사항이 있을 시 저장할 때마다 채팅에 2,4,6,8배씩 이렇게 채팅이 배열에 담겨 증가하는 방식이 생겼다.

**해결**
React에서는 개발 중에 코드를 수정하고 저장하면 변경된 부분만 실시간으로 반영되어 화면이 자동으로 다시 렌더링된다. 이를 Hot Reloading 또는 Fast Refresh라고 한다. 이 기능을 통해 코드를 수정한 후에도 새로고침 없이 변경 사항을 즉시 확인할 수 있다. 하지만 모든 개발 환경에서 이 기능이 자동으로 동작하지는 않는다. 그래서 일부 설정이 필요하거나 개발 도구와 프레임워크에 따라 동작 방식이 다를 수 있다.  때로는 변경 사항이 자동으로 감지되지 않아 수동으로 새로고침해야 할 수도 있다.

**해결 방법**
수동으로 새로고침을 해주었다.

### 자동 재연결 에러

Stomp.over did not receive a factory, auto reconnect will not work.(Stomp.over는 팩토리를 받지 못했으므로 자동 재연결이 작동하지 않습니다.) 라는 문구가 뜨는 문제가 생겼다.

**해결 방법** 
Stomp.over() 메소드에 팩토리 함수를 전달하지 않아서 발생한 문제였다. 팩토리 함수를 전달하여 문제를 해결할 수 있었다.
원래코드
stompClient = Stomp.over({
});
이후 코드
stompClient = Stomp.over(() => {
return socket;
});

## Be

### 로그아웃 에러

1. Postman으로 로그아웃 기능을 확인하던 중, POST 요청을 다음의 경로 “[http://localhost:8080/logout”으로](http://localhost:8080/logout%E2%80%9D%EC%9C%BC%EB%A1%9C) 보냈는데, resolved [org.springframework.web.httprequestmethodnotsupportedexception: request method 'get' not supported] 에러가 나왔습니다. GET 요청으로 들어갔다는 메시지인데, 이것은 포스트맨 설정에서 ‘Follow original HTTP Method’ 라는 설정을 켜는 것으로 바꿔줄 수 있었습니다. 그런데도 에러가 나와서 확인해보니 실제로 들어간 경로도 “/logout”이 아닌 “/login”이었습니다.(API 명세 상에서 로그아웃 기능은 요청에 데이터를 집어넣지 않는데, 데이터를 집어넣어보니 로그인이 성공했습니다….) 그래서 회원 가입, 로그인 관련 기능들의 경로 앞에 모두 “/member”를 붙여서 실행하니 잘 작동했는데, 왜 이런 일이 일어났는지는 잘 모르겠습니다.

### 입력 값 서버 멈춤 에러

사용자 채팅 테스트를 하던 중 어떤 사용자가 연속적으로 빈 입력값("")을 입력했을 때 서버가 멈추는 일이 있었습니다. 이것을 해결하기 위해 빈 입력값을 입력할 수 없도록 프론트엔드 부분에서 제한을 걸어두었습니다. 하지만 근본적으로 채팅 도배를 막는 방법은 제대로 구현하지 않아서 조금 더 고민이 필요할 것 같습니다.

### 욕설 필터링 에러

욕설을 필터링하는 기능을 추가해보았는데, 메시지를 (완벽하지는 않은) 필터링해두었더니 회원 가입을 할 때 욕설로 회원 가입을 하는 사용자가 있었습니다. 이것은 ID 중복 확인을 하면서 욕설 필터링 로직을 추가하여, 욕설로 가입을 하려고 하면 Bad Request 응답을 보내도록 수정했습니다.


