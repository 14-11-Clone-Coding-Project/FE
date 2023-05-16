import styled from "styled-components";

export const StHomeContainer = styled.div`
  width: 100vw; // vw - view width
  height: 100vh; //vh - view height
  display: flex;
  padding: 50px;
  justify-content: space-between;
`;

export const StLeftBox = styled.div`
  /* border: 1px solid blue; */
  width: 60%;
`;
export const StChattingBox = styled.form`
  border: 2px solid var(--color-red);
  width: 100%;
  height: 100%;
`;
export const StChattingDisplay = styled.div`
  border: 2px solid var(--color-red);
  height: 90%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
  padding: 15px;

  &::-webkit-scrollbar {
    width: 15px; /* 스크롤 바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    /* 스크롤바 색상 */
    /* border: 2px solid var(--color-red); */
    background-color: rgba(108, 0, 0, 0.8);
  }

  &::-webkit-scrollbar-track {
    /* 스크롤 바 트랙 색상 */
    border-left: 2px solid rgba(108, 0, 0); 
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const StChattingInput = styled.div`
  /* border: 1px solid red;   */
  height: 10%;
`;

export const StInput = styled.input`
  border: 2px solid var(--color-red);
  width: 80%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--color-green);
  padding: 10px;
  font-size: 20px;
`;

export const StRightBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StUserList = styled.div`
  border: 3px solid var(--color-red);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: 75%;
  gap: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 15px; /* 스크롤 바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    /* 스크롤바 색상 */
    /* border: 2px solid var(--color-red); */
    background-color: rgba(108, 0, 0, 0.8);
  }

  &::-webkit-scrollbar-track {
    /* 스크롤 바 트랙 색상 */
    border-left: 2px solid rgba(108, 0, 0); 
    background-color: rgba(0, 0, 0, 0.4);
  }

  h1 {
    font-size: 35px;
    color: var(--color-green);
  }

  ul {
    li {
      font-size: var(--font-medium);
      color: var(--color-yellow);
      margin-bottom: 10px;
    }
  }
`;

export const StButtonsBox = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button:nth-child(2) {
    align-self: flex-end;
  }
`;
