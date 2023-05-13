import React from "react";
import { StButton } from "../../styles/Button.styles";

function Button({
  children,
  width,
  fontSize,
  padding,
  paddingBlock,
  onClick,
  height,
  border,
  backgroundColor,
}) {
  return (
    <StButton
      width={width}
      fontSize={fontSize}
      padding={padding}
      paddingBlock={paddingBlock}
      onClick={onClick}
      height={height}
      backgroundColor={backgroundColor}
      border={border}
    >
      {children}
    </StButton>
  );
}

export default Button;
