import React from "react";
import { styled } from "styled-components";
import banner from "./banner.png";
import { txtColor, txtExtraLg } from "../../UI/variaveis";

const StyledBanner = styled.div`
  width: 100%;
  height: 328px;

  padding: 0 4rem;
  margin-bottom: 56px;

  display: flex;
  align-items: center;

  background: center / cover url(${banner});
  border-radius: 20px;
  opacity: 0.8;
`;

const StyledTitle = styled.h1`
  font-size: ${txtExtraLg};
  color: ${txtColor};
  width: 20vw;
`;

export default function Banner() {
  return (
    <StyledBanner>
      <StyledTitle>A galeria mais completa de fotos do espaço!</StyledTitle>
    </StyledBanner>
  );
}
