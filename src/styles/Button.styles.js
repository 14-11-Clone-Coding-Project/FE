import styled from "styled-components";

export const StButton = styled.button`
  border: 2px solid var(--color-red);
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  padding-block: ${(props) => props.paddingBlock};
  color: var(--color-green);
  font-weight: var(--weight-semi-bold);
  background-color: rgba(0, 0, 0, 0.8);
  height: ${(props) => props.height}
`;
