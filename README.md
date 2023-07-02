# Clone Project

## 항해99 14기 클론코딩 - 11조

![image 복사본](https://github.com/14-11-Clone-Coding-Project/FE/assets/112850163/7c34c1c5-2b83-454d-9f75-667649e5656d)




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
