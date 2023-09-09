import { styled } from "styled-components";
import React from "react";
import Card from "components/Card";
import Title from "components/Title";
import Popular from "components/Popular";
import { Galery } from "context/Galery/Galery";

const StyledGalery = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 500px){
    flex-direction: column;
    align-items: center;
  }
`;

const StyledContainerGalery = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px){
    flex-direction: column;
    align-items: center;
  }
`;

const StyledCardsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;

  @media screen and (max-width: 500px){
    justify-content: center;
  }
`;


export default function Cards() {

  const { galery } = Galery();

  return (
    <StyledGalery>
      <StyledContainerGalery>
        <Title>Navegue pela galeria</Title>
        <StyledCardsContainer>
          {galery.map((photo) => (
            <li key={photo.id}>
              <Card font={photo.fonte} img={photo.path} name={photo.titulo} favorite={photo.favorite} id={photo.id} photo={photo}/>
            </li>
          ))}
        </StyledCardsContainer>
      </StyledContainerGalery>
      <Popular />
    </StyledGalery>
  );
}
