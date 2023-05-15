# Clone Project

## 항해99 14기 클론코딩 - 11조

### ⭐ Team

| 이름 | 주특기 |  | 깃허브 | 기술 블로그 |
| --- | --- | --- | --- | --- |
| 이동언 | FE | FE 리더(하남자) | https://github.com/Undong00 |  |
| 강한빛 | FE |  |  |  |
| 신동현 | BE | BE 리더 | https://github.com/been1118 | https://eastlight0418.tistory.com/ |
| 전정훈 | BE | 깍두기 | https://github.com/jeonghunjeon |  |
| 송우근 | BE | 응애(사탄) | https://github.com/U-Keun | https://cat-alan3.tistory.com/ |
| 황인용 | BE | 해죠 | https://github.com/InyongHwang | https://2nyongs.tistory.com/ |
| 프로젝트 |  |  | https://github.com/14-11-Clone-Coding-Project |  |

### **😎 완성!**

| URL |  |
| --- | --- |
| 시연영상 |  |
| BE 서버 URL | http://13.125.188.38:8080/ |

### ❤ Ground Rule

- 🎥 회의 때는 카메라를 켭시다 !
- 혼자 끙끙대지 말고 서로 서로 도와주며 프로젝트를 완성합시다 !
- 죄송하지 말기
- 당당하기 !!!!!!!!
    - 깃 커밋 컨벤션
        
        ```
        # --- COMMIT END ---
        #   <타입> 리스트
        #   feat        : 기능 (새로운 기능)
        #   fix         : 버그 (버그 수정)
        #   refactor    : 리팩토링
        #   design      : CSS 등 사용자 UI 디자인 변경
        #   comment     : 필요한 주석 추가 및 변경
        #   style       : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
        #   docs        : 문서 수정 (문서 추가, 수정, 삭제, README)
        #   test        : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
        #   chore       : 기타 변경사항 (빌드 스크립트 수정, assets, 패키지 매니저 등)
        #   init        : 초기 생성
        #   rename      : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우
        #   remove      : 파일을 삭제하는 작업만 수행한 경우
        # ------------------
        #   제목 첫 글자를 대문자로
        #   제목은 명령문으로
        #   제목 끝에 마침표(.) 금지
        #   제목과 본문을 한 줄 띄워 분리하기
        #   본문은 "어떻게" 보다 "무엇을", "왜"를 설명한다.
        #   본문에 여러줄의 메시지를 작성할 땐 "-"로 구분
        # ------------------
        #   <꼬리말>
        #   필수가 아닌 optioanl
        #   Fixes        :이슈 수정중 (아직 해결되지 않은 경우)
        #   Resolves     : 이슈 해결했을 때 사용
        #   Ref          : 참고할 이슈가 있을 때 사용
        #   Related to   : 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)
        #   ex) Fixes: #47 Related to: #32, #21
        
        [출처](https://kdjun97.github.io/git-github/commit-convention/)
        ```
        

[BE memo](https://www.notion.so/BE-memo-431f56c03a8a4569b76639f7ca80e028)

[트러블 슈팅](https://www.notion.so/fd06d7e7cec9419e9f5a9ff97d8c3c56)

### ⏰ Time Table

- **09:00 ~ 09:30**  출석 체크 및 준비
- **09:30 ~ 10:30**  오전 정기 회의
- **10:30 ~ 12:00**  집중 코딩!
- **12:00 ~ 13:00**  점심시간
- **13:00 ~ 13:30**  중간점검
- **13:30 ~ 16:00**  집중 코딩!
- **16:00 ~ 17:00**  오후 정기 회의
- **17:00 ~ 18:00**  집중 코딩!
- **18:00 ~ 19:00**  저녁시간
- **19:00 ~ 21:00**  개별 일정 및 각자 코딩

---

## 1. 프로젝트 주제

<aside>
⚙ (무엇을 클론하는지 우리도 모르는) (Look-look Chat) 보노보노 ****통신 (채팅)

</aside>

- 조사해야하는 채팅 관련 키워드 : 웹 소켓, TCP/IP, STOMP
    - 모티브 이미지
        
        ![e1eeb20f5011eb1e13988235dde48967.png](Clone%20Project%206aec846876c44a2ea98d0558f8623b31/e1eeb20f5011eb1e13988235dde48967.png)
        
- 참고 링크 (항해 9기 D반 3조 콤-퓨타 통신)
    - [https://www.youtube.com/watch?v=RIhJT83dV-w](https://www.youtube.com/watch?v=RIhJT83dV-w)
    - FE : [https://github.com/PC-TongSin/PC-TongSin_Front-end](https://github.com/PC-TongSin/PC-TongSin_Front-end)
    - BE : [https://github.com/PC-TongSin/PC-TongSin_Back-end](https://github.com/PC-TongSin/PC-TongSin_Back-end)
    **[https://github.com/jeonga127/WebSocket-Stomp-Chat/blob/main/src/main/resources/static/app.js](https://github.com/jeonga127/WebSocket-Stomp-Chat/blob/main/src/main/resources/static/app.js)**
- Project description
    - 1차 목표 : 채팅 기능 구현
        - 게시판 CRUD를 하기 전에 채팅 기능을 도전해보고 싶습니다. 채팅 기능을 구현하는데 시간이 얼마나 걸릴지 알 수 없어서, 먼저 그것에 대해 알아볼 예정입니다.
    - 시간이 남는다면 게시판 CRUD 추가

## 2. 페이지별 와이어프레임

- 브레인스토밍
    
    
- 시작 화면
    
    ![스크린샷 2023-05-12 오후 3.52.53.png](Clone%20Project%206aec846876c44a2ea98d0558f8623b31/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-05-12_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_3.52.53.png)
    
    **블루스크린은 기본적으로 파란 배경 화면(EGA : 0x01; HTML : #0000AA)에 하얀색 글자(EGA : 0x0F; HTML : #FFFFFF)로 오류 내용을 표시한다.**
    
    **스크롤 배경 : #E1DFE0
    스크롤 : #C4C2C3**
    
- 메인페이지(채팅창)
    
    ![스크린샷 2023-05-12 오후 3.53.15.png](Clone%20Project%206aec846876c44a2ea98d0558f8623b31/%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-05-12_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_3.53.15.png)
    

- 게시판(나중에 추가)
- 마이 페이지(나중에 추가)

[https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FmUULSv8q4BkK3rLqrED5ZV%2FUntitled%3Ftype%3Ddesign%26node-id%3D0-1%26t%3DfdrmvP8G5BQC32LV-0](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FmUULSv8q4BkK3rLqrED5ZV%2FUntitled%3Ftype%3Ddesign%26node-id%3D0-1%26t%3DfdrmvP8G5BQC32LV-0)

## 3. 상세 TASK

[WBS / TASK 정리](https://www.notion.so/fca7fa189b164ab48c5d75b185afe7f2)

## 💻 **기능 체크리스트**

💚 Front-end

- 
- [ ]  

💚 Front-end

- 
    - [ ]  

  🐧 Back-end 🐧

- 
    - [ ]  
    

 🐧 Back-end 🐧

- 
- [ ]  

[페이지별 API](https://www.notion.so/66547e489f0c4caf823a2394da2339af)

## 4. API 설계

- API 명세
    
    [API 설계](https://www.notion.so/33f45da98c984bf08fa75005abc4dc65)
    

## 5. ERD

- **ERD diagram**
    
    [https://www.erdcloud.com/d/KryT6NtTnvnCFtgAo](https://www.erdcloud.com/d/KryT6NtTnvnCFtgAo)
    
- application.properties
    
    ```java
    jwt.secret.key=7ZWt7ZW0OTntmZTsnbTtjIXtlZzqta3snYTrhIjrqLjshLjqs4TroZzrgpjslYTqsIDsnpDtm4zrpa3tlZzqsJzrsJzsnpDrpbzrp4zrk6TslrTqsIDsnpA=
    
    spring.redis.host=localhost
    spring.redis.port=6379
    
    spring.h2.console.enabled=true
    spring.datasource.url=jdbc:h2:mem:db;MODE=MYSQL;
    spring.datasource.username=sa
    spring.datasource.password=
    
    spring.jpa.show-sql=true
    spring.jpa.hibernate.ddl-auto=update
    
    spring.thymeleaf.cache=false
    
    spring.jpa.properties.hibernate.show_sql=true
    spring.jpa.properties.hibernate.format_sql=true
    ```
