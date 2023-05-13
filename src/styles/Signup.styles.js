import styled from "styled-components";

export const StSignupContainer = styled.div`
  width: 100vw; // vw - view width
  height: 100vh; //vh - view height
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StSignupnBox = styled.div`
  width: 40%;
  height: 60%;
  background-color: rgba(52, 54, 56, 0.4);
`;

export const StSignupContents = styled.div`
  border: 2px solid var(--color-red);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 5px;
`;

export const StSignupHeader = styled.header`
  color: var(--color-green);
  
  h1{
    font-size: 40px;
    -webkit-text-stroke: .5px var(--color-dark-black);
    font-weight: var(--weight-bold);
  }
`;

export const StInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 35%;
`;

export const StInput = styled.input`
  border: 2px solid var(--color-red);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--color-green);
  font-size: 20px;
`;

export const StButtonsBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
