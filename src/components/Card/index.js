import React from "react";
import { styled } from "styled-components";
import galery from "./galery.json";
import { bgCard, txtMd, txtNormal } from "UI/variaveis";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  height: 256px;
  img {
    border-radius: 20px 20px 0 0;
  }

  div > p {
    font-size: ${txtNormal};
  }
`;

const StyledDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 1rem 1.5rem;

  background-color: ${bgCard};
  border-radius: 0 0 20px 20px;
  h2 {
    font-size: ${txtMd};
  }
`;

export default function Card({ img, name, font }) {
  return (
    <StyledCard>
      <img src={img} alt={name} />
      <StyledDesc>
        <div>
          <h2>{name}</h2>
          <p>{font}</p>
        </div>
        <div>
          <img src="assets/icons/favorito.png" alt="botao expandir" />
          <img src="assets/icons/expandir.png" alt="botao expandir" />
        </div>
      </StyledDesc>
    </StyledCard>
  );
}
