import { ImgOptions } from "context/ImgOptions";
import React from "react";
import { styled } from "styled-components";
import { bgCard, txtColor, txtMd, txtNormal } from "UI/variaveis";

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  width: ${({ $ativo }) => $ativo ? '800px' : '448px'};

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
    width: ${({ $ativo }) => $ativo ? '90vw' : '246px'};
  }

  @media screen and (max-width: 400px){
    width: ${({ $ativo }) => $ativo ? '90vw' : '250px'};
  }

  
  &:hover{
    cursor: pointer;
    transition: .3s;
    transform: ${({ $ativo }) => $ativo ? 'none' : 'translateY(-10px)'};
  }
`;

const StyledDesc = styled.figcaption`
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 80px;
  padding: 1rem 1.5rem;

  background-color: ${bgCard};
  border-radius: 0 0 20px 20px;
  h3 {
    font-size: ${txtMd};
    font-weight: 700;
    margin-bottom: 10px;
    color: ${txtColor};
  }

  p {
    color: ${txtColor};
  }

  div > img {
    margin-right: 12px;
    object-fit: contain;
  }
`;

export default function Card({ img, name, font, ativo = false, id, favorite }) {

  const { setPhoto, isFavorite } = ImgOptions();

  return (
    <StyledFigure $ativo={ativo}>
      <img src={img} alt={name}/>
      <StyledDesc>
        <div>
          <h3>{name}</h3>
          <p>{font}</p>
        </div>
        <div>
          {favorite 
          ? <img src="assets/icons/favorito-ativo.png" alt="botao favorito" onClick={() => isFavorite(id)}/>
          : <img src="assets/icons/favorito.png" alt="botao favorito" onClick={() => isFavorite(id)}/>
          }
          
          <img src="assets/icons/expandir.png" alt="botao expandir" onClick={() => setPhoto({ img, name, font })}/>
        </div>
      </StyledDesc>
    </StyledFigure>
  );
}
