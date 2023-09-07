import { styled } from "styled-components";
import React from "react";
import Card from "components/Card";
import Title from "components/Title";
import Popular from "components/Popular";
import { Galery } from "context/Galery/Galery";

const StyledGalery = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const StyledContainerGalery = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledCardsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;


export default function Cards() {

  const { galery } = Galery();

  return (
    <StyledGalery>
      <StyledContainerGalery>
        <Title>Navegue pela galeria</Title>
        <StyledCardsContainer>
          {galery.map((item) => (
            <li key={item.id}>
              <Card font={item.fonte} img={item.path} name={item.titulo} favorite={item.favorite} id={item.id}/>
            </li>
          ))}
        </StyledCardsContainer>
      </StyledContainerGalery>
      <Popular />
    </StyledGalery>
  );
}
