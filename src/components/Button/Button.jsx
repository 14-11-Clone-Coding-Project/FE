import React from "react";
import { StButton } from "../../styles/Button.styles";

function Button({ children, width, fontSize, padding, paddingBlock }) {
  return (
    <StButton
      width={width}
      fontSize={fontSize}
      padding={padding}
      paddingBlock={paddingBlock}
    >
      {children}
    </StButton>
  );
}

export default Button;
