import React from "react";
import { styled } from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";
import Input from "../Input";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  margin-top: 45px;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Input placeholder={"O que você procura?"} />
    </StyledHeader>
  );
}
