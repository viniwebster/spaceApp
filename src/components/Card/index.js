import React from "react";
import { styled } from "styled-components";
import { bgCard, txtMd, txtNormal } from "UI/variaveis";

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  width: 448px;

  filter: drop-shadow(0px 7px 7px rgba(0, 0, 0, 0.4));

  img {
    max-height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div > p {
    font-size: ${txtNormal};
  }

  @media screen and (max-width: 768px){
    width: 246px
  }

  @media screen and (max-width: 400px){
    width: 250px
  }

  
  &:hover{
    cursor: pointer;
    transition: .3s;
    transform: translateY(-10px);
  }
`;

const StyledDesc = styled.figcaption`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 1rem 1.5rem;

  background-color: ${bgCard};
  border-radius: 0 0 20px 20px;
  h3 {
    font-size: ${txtMd};
    font-weight: 700;
    margin-bottom: 10px;
  }

  div > img {
    margin-right: 12px;
    object-fit: contain;
  }
`;

export default function Card({ img, name, font }) {
  return (
    <StyledFigure>
      <img src={img} alt={name} />
      <StyledDesc>
        <div>
          <h3>{name}</h3>
          <p>{font}</p>
        </div>
        <div>
          <img src="assets/icons/favorito.png" alt="botao expandir" />
          <img src="assets/icons/expandir.png" alt="botao expandir" />
        </div>
      </StyledDesc>
    </StyledFigure>
  );
}
