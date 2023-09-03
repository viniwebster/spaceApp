import React from "react";
import { styled } from "styled-components";
import { ReactComponent as Facebook } from "./sociais/facebook.svg";
import { ReactComponent as Instagram } from "./sociais/instagram.svg";
import { ReactComponent as Twitter } from "./sociais/twitter.svg";
import { bgMd } from "UI/variaveis";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 72px;

  background-color: ${bgMd};
  padding: 30px 46px;

  div {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <a href="/">
          <Facebook />
        </a>
        <a href="/">
          <Instagram />
        </a>
        <a href="/">
          <Twitter />
        </a>
      </div>

      <p>Desenvolvido por Vinicius</p>
    </StyledFooter>
  );
}
