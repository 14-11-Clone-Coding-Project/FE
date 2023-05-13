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
}) {
  return (
    <StButton
      width={width}
      fontSize={fontSize}
      padding={padding}
      paddingBlock={paddingBlock}
      onClick={onClick}
      height={height}
    >
      {children}
    </StButton>
  );
}

export default Button;
