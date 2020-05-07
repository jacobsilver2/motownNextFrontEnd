import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  background-color: ${(props) =>
    props.danger ? props.theme.red : props.theme.blue};
  color: ${(props) => props.theme.offWhite};
  border: none;

  padding: ${(props) => (props.large ? "10px 20px" : "10px 20px")};
  font-size: ${(props) => (props.large ? "2rem" : "1.6rem")};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}` : "")};
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}` : ""};
  margin-left: ${(props) => (props.marginLeft ? `${props.marginLeft}` : "")};
  margin-right: ${(props) => (props.marginRight ? `${props.marginRight}` : "")};
`;

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  label,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => {
  return (
    <StyledButton
      danger={buttonStyle === "danger"}
      large={buttonSize === "large"}
      onClick={onClick}
      type={type}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
