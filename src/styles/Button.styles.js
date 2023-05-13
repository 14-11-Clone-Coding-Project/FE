import styled from "styled-components";

export const StButton = styled.button`
  border: ${(props) => props.border || "none"};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  padding-block: ${(props) => props.paddingBlock};
  color: var(--color-green);
  font-weight: var(--weight-semi-bold);
  background-color: ${(props) => props.backgroundColor || "none"};
  height: ${(props) => props.height}
`;
