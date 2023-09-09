import Title from "components/Title";
import React from "react";
import { styled } from "styled-components";
import popular from "./popular.json";
import Image from "./Images";
import { secondaryColor, terciaryColor, txtMd } from "UI/variaveis";

const StyledPopular = styled.div`
  display: flex;
  flex-direction: column;
  width: 212px;

  @media screen and (max-width: 768px){
    width: 156px;
  }

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 58px;
  padding: 14px 30px; 
  background-color: transparent;
  border: 2px solid ${terciaryColor, secondaryColor};
  border-radius: 10px;

  color: #FFF;
  text-align: center;
  font-size: ${txtMd};
  font-weight: 700;

  cursor: pointer;

  &:hover{
    transition: .3s;
    background-color: ${secondaryColor};
  }
`;

export default function Popular() {
  return (
    <StyledPopular>
      <Title>Populares</Title>
      {popular.map((item) => (
        <Image src={item.img} key={item.id} />
      ))}
      <StyledButton>
        Ver mais
      </StyledButton>
    </StyledPopular>
  );
}
