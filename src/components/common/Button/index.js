import React from "react";
import { StyledButton } from "./Button.style";

const Button = ({ title, handleClick }) => {
  return <StyledButton onClick={handleClick}>{title}</StyledButton>;
};

export default Button;
