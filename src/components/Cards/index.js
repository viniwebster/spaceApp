import { styled } from "styled-components";
import galery from "./galery.json";
import React from "react";
import Card from "components/Card";
import { terciaryColor } from "UI/variaveis";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    font-size: 2rem;
    color: ${terciaryColor};
  }
`;

const StyledCardsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  row-gap: 4rem;
  align-items: center;
  flex-wrap: wrap;

`;

export default function Cards() {
  return (
    <StyledContainer>
      <h2>Navegue pela galeria</h2>
      <StyledCardsContainer>
        {galery.map((item) => (
          <li>
            <Card font={item.font} img={item.img} name={item.name} />
          </li>
        ))}
      </StyledCardsContainer>
    </StyledContainer>
  );
}
