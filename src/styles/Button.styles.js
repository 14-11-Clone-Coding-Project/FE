import styled from "styled-components";

export const StButton = styled.button`
  border: 2px solid var(--color-dark-red);
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  padding-block: ${(props) => props.paddingBlock};
  color: var(--color-green);
  font-weight: var(--weight-semi-bold);
  background-color: var(--color-dark-black);
  opacity: 0.7;
`;
